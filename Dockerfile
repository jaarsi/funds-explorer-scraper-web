FROM node:latest
ENV TZ="America/Sao_Paulo"
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install
COPY .next ./.next
CMD [ "yarn", "start" ]
