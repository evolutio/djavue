FROM node:14.20-slim

WORKDIR /apimock

# Install basic SO and Python
RUN apt-get update \
  && rm -rf /var/lib/apt/lists/* \
  && npm install -g pm2@5.2.0

#### Prepare API MOCK using NODEJS express
COPY ./package.json package-lock.json ./

RUN npm install \
  && npm cache clean --force \
  && npm cache verify

COPY . ./

EXPOSE 8000
