import { NextFunction, Request, Response } from "express";
import { OrderServices } from "./order.services";
import { ProductServices } from "../product/product.services";
import { errorHandler } from "../../utils/error.handler";

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const orderData = req.body;
  const { productId, quantity } = orderData;
  try {
    const targetProduct = await ProductServices.searchByIdDB(productId);
    if (!targetProduct)
      return next(errorHandler(404, `${productId} product not found!`));

    const { inventory } = targetProduct;
    const { quantity: productQuantity } = inventory;

    if (productQuantity < quantity) {
      return next(
        errorHandler(400, "Insufficient quantity available in inventory"),
      );
    }

    try {
      const data = await OrderServices.createOrderDB(orderData);

      await ProductServices.updateProductByIdDB(productId, {
        inventory: {
          quantity: productQuantity - quantity,
          inStock: productQuantity - quantity ? true : false,
        },
      });

      return res.status(201).json({
        success: true,
        message: "Order created successfully!",
        data,
      });
    } catch (error) {
      return next(error);
    }
  } catch (error) {
    return next(error);
  }
};

export const searchOrders = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {};
