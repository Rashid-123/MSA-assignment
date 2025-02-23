import axios from "axios";
import logger from "../config/logger.js";
import config from "../config/env.js";

// Yelp API base URL
const YELP_API_URL = "https://api.yelp.com/v3/businesses/search";
/**
 * Fetch data from Yelp API.
 * @param {string} term - Search keyword.
 * @param {string} location - Location for the search.
 * @param {number} limit - Number of results (default: 10).
 * @returns {Promise<Array>} - List of businesses.
 */

const fetchYelpData = async (term, location = "San Francisco", limit = 10) => {
      try {
            logger.info(`Fetching data from Yelp for: ${term}, Location: ${location}`);

            const response = await axios.get(YELP_API_URL, {
                  headers: {
                        Authorization: `Bearer ${config.yelpApiKey}`,
                  },
                  params: { term, location, limit },
            });

            if (!response.data.businesses) {
                  throw new Error("No businesses found");
            }

            const places = response.data.businesses.map((business) => ({
                  name: business.name,
                  address: business.location.address1 || "Address not available",
                  rating: business.rating || "No rating",
                  phone: business.phone || "No phone number",
            }));

            logger.info(`Successfully fetched ${places.length} results for: ${term}`);
            return places;
      } catch (error) {
            logger.error(`Error fetching data from Yelp: ${error.message}`);
            throw new Error("Failed to fetch data from Yelp.");
      }
};

export { fetchYelpData };
