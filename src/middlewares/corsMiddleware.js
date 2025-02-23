import cors from "cors"
import config from "../config/env.js"

const allowedOrigins = [
      "http://localhost:3000",
      "https://yourfrontend.com",
      `${config.frontend_url}`
];

const corsMiddleware = cors({
      origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
                  callback(null, true);
            } else {
                  callback(new Error("Not allowed by CORS"));
            }
      },
      credentials: true,
});

export default corsMiddleware;
