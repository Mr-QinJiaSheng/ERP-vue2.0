webpackJsonp([1],{556:function(e,t,n){function o(e){n(566)}var a=n(211)(n(564),n(571),o,"data-v-2398d4dc",null);e.exports=a.exports},564:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(212),a=n.n(o),r=n(137),s=n.n(r),i=n(90),d=n(138),l=n(89);t.default={name:"login",data:function(){return{logining:!1,winSize:{width:"",height:""},formOffset:{position:"absolute",left:"",top:""},login_actions:{disabled:!1},data:{username:"admin",password:"cloudy",token:""},rule_data:{username:[{validator:function(e,t,n){""===t?n(new Error("请输入用户名")):/^[a-zA-Z0-9_-]{2,16}$/.test(t)?n():n(new Error("用户名至少6位,由大小写字母和数字,-,_,组成"))},trigger:"blur"}],password:[{validator:function(e,t,n){""===t?n(new Error("请输入密码")):/^[a-zA-Z0-9_-]{6,16}$/.test(t)?n():n(new Error("密码至少6位,由大小写字母和数字,-,_组成"))},trigger:"blur"}]}}},computed:s()({},n.i(l.b)({loadRoutersDone:function(e){return e.loadRoutersDone},backgroundMenus:function(e){return e.backgroundMenus}})),created:function(){this.setSize()},methods:s()({setSize:function(){this.winSize.width=window.innerWidth+"px",this.winSize.height=window.innerHeight+"px",this.formOffset.left=parseInt(this.winSize.width)/2-175+"px",this.formOffset.top=parseInt(this.winSize.height)/2-178+"px"},onLogin:function(e){var t=this;this.$refs[e].validate(function(e){if(e){t.logining=!0;var n={username:t.data.username,password:t.data.password};t.$ajax.post("/login",n).then(function(e){t.logining=!1;var n=e.data,o=n.code,r=n.msg,s=n.data;if("success"==o){var d=s.user;t.$message({message:r,type:"success"}),i.a.set("userinfo",a()(d)),t.setGlobalUserInfo(d),i.a.set("groups",a()(s.groups));var l={groups:s.groups,isAdmin:d.IsAdmin};t.$ajax.post("/menu",l).then(function(e){var n=e.data,o=n.code,r=n.msg,s=n.data;if("success"==o){var d=t.menuList2Json(s.menus);i.a.set("backgroundMenus",a()(d)),t.setGlobalUserMenu(d),t.loadBackgroundRouters()}else t.$message({message:r,type:"error"});t.$router.push("/")})}else t.$message({message:r,type:"error"})})}})},menuList2Json:function(e){var t=[],n=[];if(null==e)return t;for(var o=e.length,a=0;a<o;a++){for(var r=e[a],s=r.ParentRight-r.ParentLeft,i=!1,d=0;d<n.length;d++)s==n[d]&&(i=!0);0==i&&n.push(s)}n.sort();for(var l=0,u=n.length;l<u;l++)for(var c=n[l],p=0;p<o;p++){var g=e[p],A=g.ParentRight-g.ParentLeft;if(c==A)if(null!=g.Parent)for(var f=g.Parent.Index,m=0;m<o;m++)e[m].Index==f&&("children"in e[m]||(e[m].children=[]),delete g.Parent,delete g.ParentLeft,delete g.ParentRight,g.path="/"+g.path,e[m].children.push(g));else delete g.Parent,delete g.ParentLeft,delete g.ParentRight,g.path="/"+g.path,t.push(g)}return t},loadBackgroundRouters:function(){if(0==this.loadRoutersDone){var e=n.i(d.a)(this.backgroundMenus);this.$router.addRoutes([e]),this.setloadRoutersDone(!0)}}},n.i(l.c)({setGlobalUserInfo:"GLOBAL_SET_USERINFO",setGlobalUserMenu:"GLOBAL_SET_UER_MENUS",setloadRoutersDone:"GLOBAL_LOAD_ROUTES_DONE"}))}},565:function(e,t,n){t=e.exports=n(554)(!0),t.push([e.i,".login[data-v-2398d4dc]{background:#1f2d3d}.login .loginform[data-v-2398d4dc]{box-shadow:0 0 8px 0 rgba(0,0,0,.06),0 1px 0 0 rgba(0,0,0,.02);border-radius:5px;-moz-border-radius:5px;background-clip:padding-box;margin-bottom:3rem;background-color:#f9fafc;border:2px solid #8492a6}.login .title[data-v-2398d4dc]{margin:0 auto 40px;text-align:center;color:red;font-weight:400;font-size:2rem}.login .title span[data-v-2398d4dc]{cursor:pointer}.login .title span.active[data-v-2398d4dc]{font-weight:700;font-size:18px}.login .loginform[data-v-2398d4dc]{width:350px;padding:35px 35px 15px}","",{version:3,sources:["/Users/cloudy/Documents/go/src/goERP/web_pc/src/views/global/login.vue"],names:[],mappings:"AACA,wBACE,kBAAoB,CACrB,AACD,mCACI,+DAA6E,AAC7E,kBAAmB,AACnB,uBAAwB,AACxB,4BAA6B,AAC7B,mBAAoB,AACpB,yBAA0B,AAC1B,wBAA0B,CAC7B,AACD,+BACI,mBAA2B,AAC3B,kBAAmB,AACnB,UAAW,AACX,gBAAoB,AACpB,cAAgB,CACnB,AACD,oCACM,cAAgB,CACrB,AACD,2CACQ,gBAAkB,AAClB,cAAgB,CACvB,AACD,mCACI,YAAa,AACb,sBAA6B,CAChC",file:"login.vue",sourcesContent:["\n.login[data-v-2398d4dc] {\n  background: #1F2D3D;\n}\n.login .loginform[data-v-2398d4dc] {\n    box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);\n    border-radius: 5px;\n    -moz-border-radius: 5px;\n    background-clip: padding-box;\n    margin-bottom: 3rem;\n    background-color: #F9FAFC;\n    border: 2px solid #8492A6;\n}\n.login .title[data-v-2398d4dc] {\n    margin: 0px auto 40px auto;\n    text-align: center;\n    color: red;\n    font-weight: normal;\n    font-size: 2rem;\n}\n.login .title span[data-v-2398d4dc] {\n      cursor: pointer;\n}\n.login .title span.active[data-v-2398d4dc] {\n        font-weight: bold;\n        font-size: 18px;\n}\n.login .loginform[data-v-2398d4dc] {\n    width: 350px;\n    padding: 35px 35px 15px 35px;\n}\n"],sourceRoot:""}])},566:function(e,t,n){var o=n(565);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(555)("6d77b83c",o,!0,{})},571:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login",style:e.winSize},[n("el-row",[n("el-col",{attrs:{span:24}},[n("div",{staticClass:"content"},[n("el-form",{ref:"loginData",staticClass:"loginform",style:e.formOffset,attrs:{"label-position":"left","label-width":"0px",model:e.data,rules:e.rule_data}},[n("h3",{staticClass:"title"},[n("span",[e._v("系统登录")])]),e._v(" "),n("el-form-item",{attrs:{prop:"username"}},[n("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"请输入账号"},model:{value:e.data.username,callback:function(t){e.$set(e.data,"username",t)},expression:"data.username"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"请输入密码"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.onLogin("loginData")}},model:{value:e.data.password,callback:function(t){e.$set(e.data,"password",t)},expression:"data.password"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.onLogin("loginData")}}},[e._v("登录")])],1)],1)],1)])],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=1.d09e8108648a9b113c8d.js.map