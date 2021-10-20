FROM node

WORKDIR /nextjs

# RUN npm install next react react-dom

COPY ["./src/package.json", "./src/package-lock.json", "./"]

# RUN npm install --production=false
RUN npm install --production

COPY ./src ./

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
# CMD ["npm", "run", "dev"]