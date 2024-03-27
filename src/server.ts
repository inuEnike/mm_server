import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import dbConnector from "./utils/db";
import errorHandler from "./middleware/error.middleware";
import ProductRoute from "./routes/product.routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(errorHandler);

app.use("/products", ProductRoute);

app.all("*", (req: Request, res: Response) => {
  res.status(404).json({
    Error: "No route found",
  });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
  dbConnector();
});
