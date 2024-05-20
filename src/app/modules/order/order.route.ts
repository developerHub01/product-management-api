import express from "express";
import { searchOrders, createOrder } from "./order.controller";

const route = express.Router();

/**
 * create order api
 */
route.post("/", createOrder);
/**
 * all order and search order by email api
 */
route.get("/", searchOrders);

export const orderRoute = route;
