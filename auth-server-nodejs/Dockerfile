FROM node

WORKDIR /auth-server-nodejs

COPY ["./package.json", "./package-lock.json", "./"]

RUN npm install --production=false

COPY . .

# RUN npm run build

CMD ["/bin/sh", "entrypoint.sh"]