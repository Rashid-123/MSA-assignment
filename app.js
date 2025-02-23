import express from "express";
import corsMiddleware from "./src/middlewares/corsMiddleware.js";
import rateLimitMiddleware from "./src/middlewares/rateLimitMiddleware.js";
import searchRoutes from "./src/routes/searchRoutes.js";

const app = express();


app.use(corsMiddleware);
app.use(rateLimitMiddleware);
app.use(express.json());


app.use("/api", searchRoutes);

export default app; 
