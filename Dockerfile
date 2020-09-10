FROM node:10 as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install
COPY . ./

ARG NODE_ENV="production"
ARG APP_NAME="Djordje Stojiljkovic"
ARG SYSTEM_API_URL='https://api.djordjes.com'
RUN echo 'REACT_APP_SYSTEM_API_URL=${SYSTEM_API_URL}' >> .env
RUN echo "NODE_ENV=${NODE_ENV}" >> .env
RUN echo "REACT_APP_NAME=${APP_NAME}" >> .env

RUN yarn run build

FROM nginx:1.15.2-alpine
COPY --from=build-deps /usr/src/app/build /var/www
COPY server/nginx.conf /etc/nginx/nginx.conf
EXPOSE 83
CMD [ "nginx", "-g", "daemon off;" ]
