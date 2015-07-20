FROM alichen/ubuntu-nvm:v1
MAINTAINER "alichen" <ali322@gmail.com>

#RUN apt-get update

RUN mkdir -p /opt/src
ADD . /opt/src
WORKDIR /opt/src

ENV NODE_VERSION iojs-v2.4.0

#Install iojs
RUN bash -l -c "nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default \
    && npm install pm2 -g \
    && cd /opt/src;npm install --production"

ENV PATH ~/.nvm/versions/io.js/v2.4.0/bin:$PATH

EXPOSE 3000
CMD ["pm2 start /opt/src/app.js --next-gen-js"]
