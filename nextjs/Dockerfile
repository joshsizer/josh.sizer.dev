FROM node

ARG APP_ENV
EXPOSE 3000

WORKDIR /nextjs

COPY ./ ./

RUN chmod u+x install.sh && chmod u+x entrypoint.sh

RUN ./install.sh

CMD ./entrypoint.sh
