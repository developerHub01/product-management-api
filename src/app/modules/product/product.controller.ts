import { NextFunction, Request, Response } from "express";
import { productSchemaValidator } from "./schema.validation.zod";

export const createProduct = async(req:Request, res:Response, next:NextFunction)=>{
  
} 

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
