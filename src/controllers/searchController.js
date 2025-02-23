import { fetchYelpData } from "../services/yelpService.js";
import logger from "../config/logger.js";


// ---------------------------Get pizza places from Yelp API.----------------------------------------

export const getPizzaPlaces = async (req, res) => {
      try {
            logger.info("Fetching pizza places...");
            const data = await fetchYelpData("pizza");
            res.status(200).json({ places: data });
      } catch (error) {
            logger.error(`Error fetching pizza places: ${error.message}`);
            res.status(500).json({ message: "Failed to fetch pizza places." });
      }
};


// ---------------------------Get juice places from Yelp API.------------------------------------

export const getJuicePlaces = async (req, res) => {
      try {
            logger.info("Fetching juice places...");
            const data = await fetchYelpData("juice");
            res.status(200).json({ places: data });
      } catch (error) {
            logger.error(`Error fetching juice places: ${error.message}`);
            res.status(500).json({ message: "Failed to fetch juice places." });
      }
};

// ----------------------------Get both pizza and juice places concurrently.-----------------------------

export const getComboPlaces = async (req, res) => {
      try {
            logger.info("Fetching both pizza and juice places...");

            const [pizza, juice] = await Promise.all([
                  fetchYelpData("pizza"),
                  fetchYelpData("juice"),
            ]);

            res.status(200).json({ places: [...pizza, ...juice] });
      } catch (error) {
            logger.error(`Error fetching combo places: ${error.message}`);
            res.status(500).json({ message: "Failed to fetch combo places." });
      }
};
