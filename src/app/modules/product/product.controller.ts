import { NextFunction, Request, Response } from "express";
import { productSchemaValidator } from "./schema.validation.zod";
import { StudentServices } from "./product.services";

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const productData = req.body;

  try {
    const product = productSchemaValidator.parse(productData);

    const createdProduct = await StudentServices.createProductDB(product);

    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: createdProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: error,
    });
  }
};

export const searchProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {};

export const specificProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {};

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {};

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {};
