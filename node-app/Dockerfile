FROM node:10

WORKDIR /app

COPY package.json index.js /app/
RUN npm install

ENTRYPOINT ["node", "index.js"]