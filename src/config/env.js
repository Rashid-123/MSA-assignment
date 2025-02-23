import dotenv from "dotenv";

dotenv.config();

export default {
      port: process.env.PORT || 5000,
      yelpApiKey: process.env.YELP_API_KEY,
      frontend_url: process.env.FRONTEND_URL,
};
