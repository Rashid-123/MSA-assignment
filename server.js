import app from "./app.js";
import createApolloServer from "./apolloServer.js";
import config from "./src/config/env.js";
import logger from "./src/config/logger.js";

const startServer = async () => {
      try {
            const server = await createApolloServer(app);  // Initialize Apollo

            app.listen(config.port, () => {
                  logger.info(`🚀 Server running at http://localhost:${config.port}`);
                  logger.info(`🚀 GraphQL available at http://localhost:${config.port}${server.graphqlPath}`);
            });

      } catch (error) {
            logger.error("❌ Error starting server:", error.message);
      }
};

startServer();
