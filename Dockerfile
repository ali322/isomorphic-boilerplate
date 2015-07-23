FROM alichen/centos-iojs:v2
MAINTAINER "alichen" <ali322@gmail.com>

RUN mkdir -p /opt/src
ADD . /opt/src

RUN cd /opt/src && \
    #npm install pm2 -g && \
    npm install --production
WORKDIR   /opt/src

EXPOSE 8081
#CMD ["/bin/bash","-c","pm2 start app.js --no-daemon --name 'hyena'"]
CMD ["/bin/bash","-c","node index.js"]
