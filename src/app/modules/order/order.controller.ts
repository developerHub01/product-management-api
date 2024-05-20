import { NextFunction, Request, Response } from "express";
import { OrderServices } from "./order.services";
import { ProductServices } from "../product/product.services";
import { errorHandler } from "../../utils/error.handler";

/**
 * create order controller
 */
export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const orderData = req.body;
  const { productId, quantity } = orderData;
  try {
    /* finding product that we are ordering */
    const targetProduct = await ProductServices.searchByIdDB(productId);

    /* if no product found with id of order's orderData */
    if (!targetProduct)
      return next(errorHandler(404, `${productId} product not found!`));

    const { inventory } = targetProduct;
    const { quantity: productQuantity } = inventory;

    /* if no product quantity is less then order quantity */
    if (productQuantity < quantity) {
      return next(
        errorHandler(400, "Insufficient quantity available in inventory"),
      );
    }

    try {
      /* creating orders */
      const data = await OrderServices.createOrderDB(orderData);
      
      /* after creating orders update product quantity */
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
      /* if any error while creating orders or updating quantity */
      return next(error);
    }
  } catch (error) {
    /* if any error while finding product that we are ordering */
    return next(error);
  }
};

/**
 * search orders controller
 */
export const searchOrders = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email } = req.query;
  let data;
  try {
    if (typeof email === "string")
      data = await OrderServices.searchOrderByEmailDB(email);
    else data = await OrderServices.allOrdersDB();

    /* If order not found */
    if (!data || !data?.length) {
      return res.status(200).json({
        success: true,
        message: "Order not found",
      });
    }

    /* If orders found */
    return res.status(200).json({
      success: false,
      message: email
        ? "Orders fetched successfully for user email!"
        : "Orders fetched successfully!",
      data,
    });
  } catch (error) {
    /* If any error while finding */
    return next(error);
  }
};
