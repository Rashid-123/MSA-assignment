import { fetchYelpData } from "../services/yelpService.js";
import logger from "../config/logger.js";

const resolvers = {
      Query: {
            searchPizza: async () => {
                  try {
                        logger.info("GraphQL: Fetching pizza places...");
                        return await fetchYelpData("pizza");
                  } catch (error) {
                        logger.error(`GraphQL Error: searchPizza failed - ${error.message}`);
                        throw new Error("Failed to fetch pizza places.");
                  }
            },
            searchJuice: async () => {
                  try {
                        logger.info("GraphQL: Fetching juice places...");
                        return await fetchYelpData("juice");
                  } catch (error) {
                        logger.error(`GraphQL Error: searchJuice failed - ${error.message}`);
                        throw new Error("Failed to fetch juice places.");
                  }
            },
            searchCombo: async () => {
                  try {
                        logger.info("GraphQL: Fetching pizza & juice places...");
                        const [pizza, juice] = await Promise.all([
                              fetchYelpData("pizza"),
                              fetchYelpData("juice"),
                        ]);
                        return [...pizza, ...juice];
                  } catch (error) {
                        logger.error(`GraphQL Error: searchCombo failed - ${error.message}`);
                        throw new Error("Failed to fetch combo places.");
                  }
            },
      },
};

export default resolvers;

