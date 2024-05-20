import express from "express";
import { searchOrders, createOrder } from "./order.controller";

const route = express.Router();

route.post("/", createOrder);
route.get("/", searchOrders);

export const orderRoute = route;
