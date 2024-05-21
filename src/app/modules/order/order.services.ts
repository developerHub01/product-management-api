import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";

/**
 * create order | service method
 */
const createOrderDB = async (data: TOrder) => {
  return await OrderModel.create({ ...data });
};
/**
 * search order by eamil or all order | service method
 */
const searchOrderByEmailDB = async (email?: string) =>{
  /* if email exist in searchTerm */
  if(typeof email !== "undefined") return await OrderModel.find({ email });
  /* for all orders */
  return await OrderModel.find({});
}
/**
 * all order | service method
 */

export const OrderServices = {
  createOrderDB,
  searchOrderByEmailDB,
};
