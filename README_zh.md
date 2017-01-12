#Isomorphic Boilerplate

[![Build Status](https://travis-ci.org/ali322/isomorphic-boilerplate.svg)](https://travis-ci.org/ali322/isomorphic-boilerplate)
[![Dependency Status](https://gemnasium.com/ali322/isomorphic-boilerplate.svg)](https://gemnasium.com/ali322/isomorphic-boilerplate)
[![Code Climate](https://codeclimate.com/github/ali322/isomorphic-boilerplate/badges/gpa.svg)](https://codeclimate.com/github/ali322/isomorphic-boilerplate)

基于node的同构JS项目模板 [English Document](./README.md)

开发
===
1. 克隆至本地 `git clone https://github.com/ali322/isomorphic-boilerplate`
2. 运行 `npm install`
4. 运行 `npm start` 启动后端开发服务器
5. 运行 `npm run hmr` 启动前端开发服务器

部署
===
1. 运行 `npm run release-static` 编译前端源码并注入至html模板
2. 上传项目源码至发布环境
1. 运行 `npm install --production`
2. 运行 `npm install pm2 -g` (更多文档请见[pm2 文档](https://github.com/Unitech/PM2))
3. 运行 `pm2 start app.js --name <Project Name>` 部署至发布环境

目录结构
===

```sh
__test__/
    |-- client/ #前端单元测试
    |-- server/ #后端单元测试
client/
    |-- asset/      #图片,字体等等资源
    |-- bundle/
        |-- common/     #公共的css和js
        |-- component/  #组件的css
        |-- index/      #index 页面入口js和css
        |-- error/      #错误页面入口js和css
        |-- .../        #更多的页面入口js和css,类似index
    |-- vendor/     #第三方库文件
server/
    |-- controller/ #express 路由目录
    |-- lib/        #后端库(工具库等等)
    |-- router.js   #后端路由定义文件
    |-- bootstrap.js #初始化后端应用,加载中间件和设置应用
shared/
    |-- lib/        #共享库(后端和前端共用)
    |-- chunk/
        |-- common/     #通用组件(例如:错误组件)
        |-- index/      #index页面所有组件
        |-- .../        #更多的页面所有组件.类似index
task/
    |-- config/
        |-- module.json #定义页面配合,以及css和js路径
        |-- vendor.json #定义第三方库
    |-- environment.js  #定义模块的环境变量
    |-- hmr-server.js       #webpack dev server 入口文件
    |-- develop-server.js #后端开发服务器入口文件
    |-- webpack.dll.js  #打包第三方库
    |-- webpack.production.js #为生产环境编译模块和第三方库
    |-- webpack.hot-update.js #为热替换开发环境编译模块和第三方库
view/
    |-- layout.html #全部布局文件
    |-- index.html  #index页面模板
    |-- *.html      #更多的页面模板
app.js      #应用入口文件
gulpfile.js #任务入口文件
```

## 许可证

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
