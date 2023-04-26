FROM node:latest
ENV TZ="America/Sao_Paulo"
WORKDIR /usr/src/app
COPY . .
RUN \
    mv .docker.build.env .env; \
    yarn install
RUN yarn build
CMD [ "yarn", "start" ]
