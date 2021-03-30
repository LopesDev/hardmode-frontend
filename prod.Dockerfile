FROM node:12-alpine as build
WORKDIR /usr/src/app
COPY . .
RUN yarn cache clean && yarn --update-checksums
RUN yarn && yarn build-prod

# Stage - Production
FROM nginx:1.19-alpine
COPY --from=build /usr/src/app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]