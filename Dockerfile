FROM node:10.14.1-alpine
WORKDIR /app
COPY . /app
RUN yarn global add create-react-app
