FROM node:10.14.1-alpine
RUN mkdir /app
WORKDIR /app
COPY . /app