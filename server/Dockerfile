FROM node

WORKDIR /usr/local/future/server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001
CMD [ "npm", "start" ]