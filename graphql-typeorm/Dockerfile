FROM node

ARG APP_ENV
EXPOSE 4000

WORKDIR /graphql-typeorm

COPY ./ ./

RUN chmod u+x install.sh && chmod u+x entrypoint.sh

RUN ./install.sh

CMD ./entrypoint.sh
