FROM alichen/centos-iojs:v1
MAINTAINER "alichen" <ali322@gmail.com>

RUN mkdir -p /opt/src
ADD . /opt/src

RUN cd /opt/src && npm install pm2 -g && \
   npm install --production
WORKDIR   /opt/src

EXPOSE 3000
CMD ["pm2 start /opt/src/app.js --next-gen-js"]
