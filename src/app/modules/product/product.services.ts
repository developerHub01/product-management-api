import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductDB = async (productData: TProduct) => {
  return await ProductModel.create({
    ...productData,
  });
};

export const StudentServices = {
  createProductDB,
};
