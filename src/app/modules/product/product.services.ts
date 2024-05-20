import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

/**
 * create product | service method
 */
const createProductDB = async (productData: TProduct) => {
  return await ProductModel.create({
    ...productData,
  });
};

/**
 * search product | service method
 */
const searchProductDB = async (searchTerm: string) => {
  const regex = new RegExp(searchTerm, "i");
  /* if searchTerm exist on name or description */
  return await ProductModel.find({
    $or: [{ name: regex }, { description: regex }],
  });
};

/**
 * all product | service method
 */
const allProductDB = async () => await ProductModel.find({});

/**
 * search by product | service method
 */
const searchByIdDB = async (id: string) => await ProductModel.findById(id);

/**
 * updating product by id | service method
 */
const updateProductByIdDB = async (id: string, data: Partial<TProduct>) => {
  return await ProductModel.findByIdAndUpdate(id, { ...data }, { new: true });
};

/**
 * deleting product by id | service method
 */
const deleteProductByIdDB = async (id: string) => {
  return await ProductModel.findByIdAndDelete(id);
};

export const ProductServices = {
  createProductDB,
  searchProductDB,
  allProductDB,
  searchByIdDB,
  updateProductByIdDB,
  deleteProductByIdDB,
};
