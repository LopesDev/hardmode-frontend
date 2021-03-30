FROM node:12-alpine

WORKDIR /usr/src/app
COPY . ./
RUN yarn cache clean && yarn --update-checksums && yarn build
EXPOSE 3000
CMD ["yarn", "start"]