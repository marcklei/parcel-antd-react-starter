# Dockerfile.nodejs

FROM node:9.5.0

WORKDIR /code
ADD . /code

RUN yarn global add parcel-bundler babel-plugin-import
RUN yarn install