FROM node:latest
ENV TZ="America/Sao_Paulo"
WORKDIR /usr/src/app
COPY . .
RUN \
    mv .env.docker .env; \
    yarn install
RUN yarn build
CMD [ "yarn", "start" ]
