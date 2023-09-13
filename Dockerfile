FROM node:14-alpine AS development
ENV NODE_ENV development
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm i
COPY . .
EXPOSE 3001
CMD [ "npm", "start" ]
