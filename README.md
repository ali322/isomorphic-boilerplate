#Hyena

isomorphic webapp boilerplate

Quick start develop with express and react as isomorphic webapp
===
- run`npm install`
- run`make start` to get backend server start(eg:express)
- run`make develop-webpack` to inject necessary files to the template file
- run`make start-public` to get webpack HMR service start

deploy
===

- run`npm install`
- run`npm install pm2 -g`(more instructions in [pm2 documention](https://github.com/Unitech/PM2))
- run`pm2 start app.js --next-gen-js` to deploy(io.js needed)
