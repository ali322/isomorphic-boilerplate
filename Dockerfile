FROM node:0.12-slim

RUN mkdir -p /opt/src
ADD . /opt/src

RUN cd /opt/src && \
    npm install --production
WORKDIR   /opt/src

EXPOSE 8081
CMD ["node", "app.js"]
