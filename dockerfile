FROM amd64/node:18.16.0-slim

WORKDIR /frontend

COPY . .

RUN npm install

CMD npm start
