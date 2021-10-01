# goERP


后台：框架采用国人谢大开发的beego

前端:webpack2+vue2+vuex+vue-router

简化数据库表设计，取消表的创建者、更新者和用户的直接关联关系，orm上为操作者的ID，而非对象

clone工程到go的src目录下，工程文件夹的名字必须为goERP，若要修改名字需要将代码中所有goERP修改为工程文件夹的名字

## 体验步骤
* 在系统变量GOPATH下src目录中执行下面的命令(文件夹名称必须为goERP,改成其他名称需要替换代码中的包引入中的字符串"goERP")

* cd到web_pc,执行下面的命令
<pre><code>
npm install
npm run build 
</pre></code>
* 在goERP目录下执行
<pre><code>
bee run
</pre></code>
* 浏览器输入[地址](localhost:8888)

回到goERP目录下执行：bee run 

默认端口为8888

默认开启了https

域名为www.hechihan.com 本机修改hosts文件

生成crt文件

gopath下src/crypto/tls/generate_cert.go

go run generate_cert.go -host www.hechihan.com
