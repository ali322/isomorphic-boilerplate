#Isomorphic Boilerplate

isomorphic webapp boilerplate [中文文档](./README_zh.md)

Quick start develop your isomorphic webapp with express and react
===
- run`npm install`
- run`npm start` to get backend server start(eg:express)
- run`npm run develop-webpack` to inject necessary files to the template file
- run`npm run start-public` to get webpack HMR service start

Deploy to production environment
===
- run`npm install --production`
- run`npm install pm2 -g`(more instructions in [pm2 documention](https://github.com/Unitech/PM2))
- run`pm2 start app.js --name <Project Name>` to deploy

Directory structure
===

```sh
client/
    |-- __tests__/  #client unit tests
    |-- asset/      #images,fonts,public css and so on
    |-- error/      #error page's entry js and css
    |-- vendor/     #third party libraries
    |-- index/      #index page's entry js and css
    |-- .../        #more your own page's entry js and css,like index page
server/
    |-- __tests__   #server unit tests
    |-- controller/ #express routes directory
    |-- lib/        #server libraries,util and helper modules inside
    |-- router.js   #server router,all the routes is defined here
    |-- bootstrap.js #initialize application,load middlewares and setup
shared/
    |-- common/     #common web components,etc:error
    |-- lib/        #shared libraries(client and server)
    |-- index/      #index page's web components
    |-- .../        #more your own page's web components,like index page
task/
    |-- config/
        |-- module.json #define page's path and module config
        |-- vendor.json #define third party libraries
    |-- environment.js  #define module's env variables
    |-- server.js       #webpack dev server entry file
    |-- vendor-css.js   #third party library's css compile
    |-- webpack-inject.js #inject compiled js and css into templates
    |-- webpack.develop.js #compile modules and vendors for develop
    |-- webpack.production.js #compile modules and vendors for production
    |-- webpack.hot-update.js #compile modules and vendors for develop in HMR
view/
    |-- layout.html #global layout template
    |-- index.html  #index page's template
    |-- *.html      #more your own page's template
app.js      #web application enrty file
gulpfile.js #task entry file
```


