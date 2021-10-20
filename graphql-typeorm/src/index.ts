import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import { createConnection } from "typeorm";

import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
import { User } from "./entity/User";

import express from "express";
import http from "http";
import cookieParser from "cookie-parser";

// the function that sets up the global context for each resolver, using the req
const context = async ({ req }: { req: any }) => {
  if (process.env.ALWAYS_AUTHENTICATE === "1") {
    console.log("Always authenticate");
    return { alwaysAuthenticate: true };
  }

  console.log("authentication required");

  const accessTokenCookie = "access-token=" + req.cookies["access-token"];
  const refreshTokenCookie = "refresh-token=" + req.cookies["refresh-token"];

  // https://medium.com/@gevorggalstyan/how-to-promisify-node-js-http-https-requests-76a5a58ed90c
  const make_req = async () => {
    return new Promise((resolve, reject) => {
      const auth_req = http.request(
        {
          hostname: "auth-server",
          port: 3000,
          path: "/userinfo",
          method: "GET",
          headers: {
            Cookie: [accessTokenCookie, refreshTokenCookie],
          },
        },
        (res) => {
          var body = "";

          res.on("data", (chunk) => {
            body += chunk;
          });

          res.on("end", () => {
            resolve(JSON.parse(body));
          });
        }
      );

      auth_req.on("error", reject);

      auth_req.end();
    });
  };

  let cookieData: any;

  try {
    cookieData = (await make_req()) as any;
  } catch (error) {
    console.log(error);
  }

  if (cookieData && cookieData.success === true) {
    return {
      user: await User.findOne({ where: { id: cookieData.data.user.id } }),
    };
  }

  return { user: undefined };
};

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    introspection: process.env.NODE_ENV !== "production",
  });

  await createConnection()
    .then(async (connection) => {
      console.log("Loading users from the database...");
      const users = await connection.manager.find(User);
      console.log("Loaded users: ", users);
    })
    .catch((error) => console.log(error));

  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
    );
    console.log("ALWAYS AUTHENTICATE:" + process.env.ALWAYS_AUTHENTICATE);
  });
};

startServer();
