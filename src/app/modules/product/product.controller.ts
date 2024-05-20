import { NextFunction, Request, Response } from "express";
import { productSchemaValidator } from "./schema.validation.zod";
import { ProductServices } from "./product.services";

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const productData = req.body;

  try {
    const product = productSchemaValidator.parse(productData);

    const createdProduct = await ProductServices.createProductDB(product);

    res.status(201).json({
      success: true,
      message: "Product created successfully!",
      data: createdProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

export const searchProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { searchTerm } = req.query;
  let data;
  try {
    if (typeof searchTerm === "string")
      data = await ProductServices.searchProductDB(searchTerm);
    else data = await ProductServices.allProductDB();

    return res.status(200).json({
      success: true,
      message: searchTerm
        ? `Products matching search term '${searchTerm}' fetched successfully!`
        : "Products fetched successfully!",
      data,
    });
  } catch (error) {
    return next(error);
  }
};

export const specificProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { productId } = req.params;

  try {
    const data = await ProductServices.searchByIdDB(productId);
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data,
    });
  } catch (error) {
    return next(error);
  }
};

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { productId } = req.params;
  const dataToUpdate = req.body;
  try {
    const data = await ProductServices.updateProductByIdDB(
      productId,
      dataToUpdate,
    );

    return res.status(201).json({
      success: true,
      message: "Product updated successfully!",
      data,
    });
  } catch (error) {
    return next(error);
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { productId } = req.params;

  try {
    await ProductServices.deleteProductByIdDB(productId);

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
  } catch (error) {
    return next(error);
  }
};
