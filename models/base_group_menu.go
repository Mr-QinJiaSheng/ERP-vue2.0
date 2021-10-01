package models

import (
	"errors"
	"strings"
	"time"

	"github.com/astaxie/beego/orm"
)

// GroupMenu 城市
type GroupMenu struct {
	ID           int64      `orm:"column(id);pk;auto"`          //主键
	CreateUserID int64      `orm:"column(create_user_id);null"` //创建者
	UpdateUserID int64      `orm:"column(update_user_id);null"` //最后更新者
	CreateDate   time.Time  `orm:"auto_now_add;type(datetime)"` //创建时间
	UpdateDate   time.Time  `orm:"auto_now;type(datetime)"`     //最后更新时间
	Group        *BaseGroup `orm:"rel(fk)"`                     //权限组
	Menu         *BaseMenu  `orm:"rel(fk)"`                     //菜单
}

func init() {
	orm.RegisterModel(new(GroupMenu))
}

// AddGroupMenu insert a new GroupMenu into database and returns last inserted Id on success.
func AddGroupMenu(m *GroupMenu, ormObj orm.Ormer) (id int64, err error) {
	id, err = ormObj.Insert(m)
	return
}

// BatchAddGroupMenu insert  list of  GroupMenu into database and returns  number of  success.
func BatchAddGroupMenu(menus []*GroupMenu, ormObj orm.Ormer) (num int64, err error) {
	qs := ormObj.QueryTable(&GroupMenu{})
	if i, err := qs.PrepareInsert(); err == nil {
		defer i.Close()
		for _, menu := range menus {
			if _, err = i.Insert(menu); err == nil {
				num = num + 1
			}
		}
	}
	return
}

// UpdateGroupMenu update GroupMenu into database and returns id on success
func UpdateGroupMenu(m *GroupMenu, ormObj orm.Ormer) (id int64, err error) {
	if _, err = ormObj.Update(m); err == nil {
		id = m.ID
	}
	return
}

// GetGroupMenuByID retrieves GroupMenu by ID. Returns error if ID doesn't exist
func GetGroupMenuByID(id int64, ormObj orm.Ormer) (obj *GroupMenu, err error) {
	obj = &GroupMenu{ID: id}
	err = ormObj.Read(obj)
	return obj, err
}

// GetAllGroupMenu retrieves all GroupMenu matches certain condition. Returns empty list if no records exist
func GetAllGroupMenu(o orm.Ormer, query map[string]interface{}, exclude map[string]interface{}, condMap map[string]map[string]interface{},
	fields []string, sortby []string, order []string, offset int64, limit int64) ([]GroupMenu, error) {
	var (
		objArrs []GroupMenu
		err     error
	)
	if limit == 0 {
		limit = 2000
	}

	qs := o.QueryTable(new(GroupMenu))
	qs = qs.RelatedSel()

	//cond k=v cond必须放到Filter和Exclude前面
	cond := orm.NewCondition()
	if _, ok := condMap["and"]; ok {
		andMap := condMap["and"]
		for k, v := range andMap {
			k = strings.Replace(k, ".", "__", -1)
			cond = cond.And(k, v)
		}
	}
	if _, ok := condMap["or"]; ok {
		orMap := condMap["or"]
		for k, v := range orMap {
			k = strings.Replace(k, ".", "__", -1)
			cond = cond.Or(k, v)
		}
	}
	qs = qs.SetCond(cond)
	// query k=v
	for k, v := range query {
		// rewrite dot-notation to Object__Attribute
		k = strings.Replace(k, ".", "__", -1)
		qs = qs.Filter(k, v)
	}
	//exclude k=v
	for k, v := range exclude {
		// rewrite dot-notation to Object__Attribute
		k = strings.Replace(k, ".", "__", -1)
		qs = qs.Exclude(k, v)
	}
	// order by:
	var sortFields []string
	if len(sortby) != 0 {
		if len(sortby) == len(order) {
			// 1) for each sort field, there is an associated order
			for i, v := range sortby {
				orderby := ""
				if order[i] == "desc" {
					orderby = "-" + strings.Replace(v, ".", "__", -1)
				} else if order[i] == "asc" {
					orderby = strings.Replace(v, ".", "__", -1)
				} else {
					return nil, errors.New("Error: Invalid order. Must be either [asc|desc]")
				}
				sortFields = append(sortFields, orderby)
			}
			qs = qs.OrderBy(sortFields...)
		} else if len(sortby) != len(order) && len(order) == 1 {
			// 2) there is exactly one order, all the sorted fields will be sorted by this order
			for _, v := range sortby {
				orderby := ""
				if order[0] == "desc" {
					orderby = "-" + strings.Replace(v, ".", "__", -1)
				} else if order[0] == "asc" {
					orderby = strings.Replace(v, ".", "__", -1)
				} else {
					return nil, errors.New("Error: Invalid order. Must be either [asc|desc]")
				}
				sortFields = append(sortFields, orderby)
			}
		} else if len(sortby) != len(order) && len(order) != 1 {
			return nil, errors.New("Error: 'sortby', 'order' sizes mismatch or 'order' size is not 1")
		}
	} else {
		if len(order) != 0 {
			return nil, errors.New("Error: unused 'order' fields")
		}
	}

	qs = qs.OrderBy(sortFields...)
	if cnt, err := qs.Count(); err == nil {
		if cnt > 0 {
			_, err = qs.All(&objArrs, fields...)
		}
	}

	return objArrs, err
}
