import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderDB = async (data: TOrder) => {
  return await OrderModel.create({ ...data });
};

export const OrderServices = { createOrderDB };
