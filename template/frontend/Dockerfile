FROM node:16.17-slim

WORKDIR /frontend

# Install basic SO and Python
RUN apt-get update && apt-get install -y \
  curl vim wget \
  build-essential \
  && npm install -g npm@9.3.1 \
  && rm -rf /var/lib/apt/lists/* \
  && npm install -g pm2@5.2.0

#### Prepare Frontend Vuejs 3

COPY ./package.json ./package-lock.json ./

RUN npm install \
  && npm cache clean --force \
  && npm cache verify

COPY . ./

RUN npm run build

ENV SHELL=/bin/bash LANG=en_US.UTF-8

COPY . ./

EXPOSE 3000
