import express from "express";
import {
  createProduct,
  searchProduct,
  specificProduct,
  updateProduct,
  deleteProduct,
} from "./product.controller";
const route = express.Router();

route.post("/", createProduct);
route.get("/", searchProduct);
route.get("/:productId", specificProduct);
route.put("/:productId", updateProduct);
route.delete("/:productId", deleteProduct);

export const productRoute = route;
