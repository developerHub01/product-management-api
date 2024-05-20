import { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";

/*

Schema for ==================

export interface TOrder {
  email: string;
  productId: string;
  price: number;
  quantity: number;
}
*/

const orderSchema = new Schema<TOrder>({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  productId: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

export const OrderModel = model<TOrder>("Order", orderSchema);
