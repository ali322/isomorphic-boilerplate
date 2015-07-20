FROM alichen/ubuntu-nvm
MAINTAINER "alichen" <ali322@gmail.com>

RUN apt-get update

#Install iojs
RUN nvm install iojs-v2.4.0 && \
    mkdir -p /opt/src && \
    npm install pm2 -g && \
    npm install --production

ADD . /opt/src
WORKDIR /opt/src

EXPOSE 3000
CMD ["pm2 start /opt/src/app.js --next-gen-js"]
