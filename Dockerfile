FROM node:14-alpine AS builder
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm i
COPY . .
EXPOSE 3001
CMD [ "npm", "run", "build" ]
