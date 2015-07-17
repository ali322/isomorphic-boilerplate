FROM library/ubuntu
MAINTAINER "alichen" <ali322@gmail.com>
RUN echo "deb http://mirrors.163.com/ubuntu/ trusty main multiverse restricted universe" > /etc/apt/sources.list
RUN apt-get update
RUN apt-get -y install wget git
RUN apt-get clean && apt-get autoclean

# Install iojs
RUN cd /opt && \
    wget http://npm.taobao.org/mirrors/iojs/v2.3.4/iojs-v2.3.4-linux-x64.tar.gz && \
    tar -xzvf iojs-v2.3.4-linux-x64.tar.gz && \
    mv iojs-v2.3.4-linux-x64 node && \
    cd /usr/local/bin && \
    #echo "export PATH=/opt/node/bin:$PATH" >> ~/.bashrc && \
    ln -s /opt/node/bin/* . && \
    rm -f /opt/iojs-v2.3.4-linux-x64.tar.gz
#RUN echo "export PATH=/opt/node/bin:$PATH" >> /etc/profile
#RUN source /etc/profile
RUN mkdir -p /opt/src
ADD . /opt/src

RUN cd /opt/src && npm install pm2 -g && \
   npm install --production && \
RUN cd /usr/local/bin && \
    ln -s /opt/node/bin/* .
WORKDIR   /opt/src

EXPOSE 3000
CMD ["pm2 start app.js --next-gen-js"]
