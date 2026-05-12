FROM node:24

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY --chown=node:node . .

ENV DEBUG=express:*

USER node

CMD [ "npm", "run", "dev"]