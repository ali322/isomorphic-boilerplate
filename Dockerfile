FROM alichen/centos-iojs:v2
MAINTAINER "alichen" <ali322@gmail.com>

RUN mkdir -p /opt/src
ADD . /opt/src

RUN cd /opt/src && \
    npm install --production
WORKDIR   /opt/src

EXPOSE 3000
CMD ["/bin/bash","-c","pm2 start app.js"]
