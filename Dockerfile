FROM node:12-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn cache clean && yarn --update-checksums
COPY . .
RUN yarn build

EXPOSE 3000
CMD ["yarn", "dev"]