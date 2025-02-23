import { ApolloServer } from "apollo-server-express";
import typeDefs from "./src/graphql/schema.js";
import resolvers from "./src/graphql/resolvers.js";

const createApolloServer = async (app) => {
      const server = new ApolloServer({ typeDefs, resolvers });

      await server.start();
      server.applyMiddleware({ app });

      return server;
};

export default createApolloServer;
