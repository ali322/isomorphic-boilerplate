FROM alichen/ubuntu-nvm:v1
MAINTAINER "alichen" <ali322@gmail.com>

#RUN apt-get update

RUN mkdir -p /opt/src
ADD . /opt/src
WORKDIR /opt/src

ENV NODE_VERSION iojs-v2.4.0
ENV NPM_MIRROR https://registry.npm.taobao.org

#Install iojs
RUN bash -l -c "export NVM_IOJS_ORG_MIRROR=http://npm.taobao.org/mirrors/iojs/ \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default \
    && npm install pm2 -g --registry=$NPM_MIRROR\
    && cd /opt/src;npm install --production --registry=$NPM_MIRROR"

#ENV PATH ~/.nvm/versions/io.js/v2.4.0/bin:$PATH
RUN cd /usr/local/bin && \
    ln -s ~/.nvm/versions/io.js/v2.4.0/bin/* .

EXPOSE 3000
CMD ["pm2 start app.js --next-gen-js"]
