FROM node:20-alpine

WORKDIR /app

RUN npm install -g mintlify

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["mintlify", "dev"]
