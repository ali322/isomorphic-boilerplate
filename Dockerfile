FROM library/ubuntu
MAINTAINER "alichen" <ali322@gmail.com>

RUN apt-get update

# Install iojs
RUN cd /opt && \
    wget http://npm.taobao.org/mirrors/iojs/v2.3.4/iojs-v2.3.4-linux-x64.tar.gz && \
    tar -xzf iojs-v2.3.4-linux-x64.tar.gz && \
    mv iojs-v2.3.4-linux-x64 node && \
    cd /usr/local/bin && \
    ln -s /opt/node/bin/* . && \
    rm -f /opt/iojs-v2.3.4-linux-x64.tar.gz
WORKDIR   /opt/src
