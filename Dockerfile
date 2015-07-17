FROM library/ubuntu
MAINTAINER "alichen" <ali322@gmail.com>

RUN apt-get update
RUN apt-get -y install wget python gcc build-essential
RUN apt-get clean && apt-get autoclean

# Install iojs
RUN cd /opt && \
    wget http://npm.taobao.org/mirrors/iojs/v2.3.4/iojs-v2.3.4.tar.gz && \
    tar -xzvf iojs-v2.3.4.tar.gz && \
    cd iojs-v2.3.4 && \
    ./configure && \
    make && make install && \
    rm -f /opt/iojs-v2.3.4-linux-x64.tar.gz
RUN npm install pm2 -g && \
    npm install && \
RUN mkdir -p /opt/src
# ADD . /opt/src
WORKDIR   /opt/src

EXPOSE 3000
CMD ["pm2 start /opt/src/app.js --next-gen-js"]
