import express, { Application, NextFunction, Request, Response } from "express";
const app: Application = express();
import productRoute from "./app/modules/product/product.route";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRoute);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Health route",
  });
});

app.get("*", (req: Request, res: Response) => {
  res.status(500).json({
    success: false,
    message: "Route not found",
  });
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
  });
});

export default app;
