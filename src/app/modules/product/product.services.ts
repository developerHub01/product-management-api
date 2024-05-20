import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductDB = async (productData: TProduct) => {
  return await ProductModel.create({
    ...productData,
  });
};
const searchProductDB = async (searchTerm: string) => {
  const regex = new RegExp(searchTerm, "i");
  return await ProductModel.find({
    $or: [{ name: regex }, { description: regex }],
  });
};
const allProductDB = async () => await ProductModel.find({});

const searchByIdDB = async (id: string) => await ProductModel.findById(id);

export const StudentServices = {
  createProductDB,
  searchProductDB,
  allProductDB,
  searchByIdDB,
};
