FROM node

WORKDIR /graphql-typeorm

COPY ["./package.json", "./package-lock.json", "./"]

# RUN npm install --production=true
RUN npm install --production=false

COPY . .

# RUN npm run build

CMD ["npm", "run", "start"]