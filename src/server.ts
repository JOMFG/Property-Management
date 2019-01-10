import app from "./app";
import { ApolloServer, mergeSchemas } from "apollo-server-express";
import schemas from "./schemas";
import resolvers from "./resolvers";

const apolloServer = new ApolloServer({
  schema: mergeSchemas({
    schemas,
    resolvers
  })
});

apolloServer.applyMiddleware({
  app,
  path: "/graphql"
});

const server = app.listen(8000, () => {
  console.log("Server started in localhost:8000");
  console.log(
    `🚀 Server ready at http://localhost:8000${apolloServer.graphqlPath}`
  );
});

export default server;
