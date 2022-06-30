FROM node:16

USER node
ENV NODE_ENV=production
ENV NPM_CONFIG_LOGLEVEL=info
ARG HOMEDIR=/usr/src/technologies

WORKDIR ${HOMEDIR}

COPY Technologies_*.taz ./

RUN tar -xzf ${HOMEDIR}/Technologies_*.taz && rm ${HOMEDIR}/Technologies_*.taz

EXPOSE 8080

CMD [ "node", "server/server.js"]