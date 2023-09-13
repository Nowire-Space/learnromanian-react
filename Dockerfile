FROM node:14-alpine
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm i
COPY . .
RUN npm run build
EXPOSE 3001
CMD [ "serve", "-s", "build" ]
