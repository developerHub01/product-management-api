import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";

/**
 * create order | service method
 */
const createOrderDB = async (data: TOrder) => {
  return await OrderModel.create({ ...data });
};
/**
 * search order by eamil | service method
 */
const searchOrderByEmailDB = async (email: string) =>
  await OrderModel.find({ email });
/**
 * all order | service method
 */
const allOrdersDB = async () => await OrderModel.find({});

export const OrderServices = {
  createOrderDB,
  searchOrderByEmailDB,
  allOrdersDB,
};
