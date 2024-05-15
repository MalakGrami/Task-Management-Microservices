# Dockerfile for User Service
FROM node:16

WORKDIR /usr/src/user-service   

COPY package*.json ./
RUN npm install

COPY . .



EXPOSE 50051

CMD ["node", "index.js"]
