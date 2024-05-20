import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderDB = async (data: TOrder) => {
  return await OrderModel.create({ ...data });
};
const searchOrderByEmailDB = async (email: string) =>
  await OrderModel.find({ email });
const allOrdersDB = async () => await OrderModel.find({});

export const OrderServices = {
  createOrderDB,
  searchOrderByEmailDB,
  allOrdersDB,
};
