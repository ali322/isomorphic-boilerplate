FROM alichen/ubuntu-nvm:v1
MAINTAINER "alichen" <ali322@gmail.com>

#RUN apt-get update

#Install iojs
RUN bash -l -c "nvm install iojs-v2.4.0 && npm install pm2 -g && npm install --production"

RUN mkdir -p /opt/src
ADD . /opt/src
WORKDIR /opt/src

EXPOSE 3000
CMD ["bash","-c","-l",
    "pm2 start /opt/src/app.js --next-gen-js"]
