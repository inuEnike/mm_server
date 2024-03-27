import { NextFunction, Request, Response } from "express";
import Products from "../models/product.models";

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await Products.find({});
    res.json({ products });
  } catch (error) {
    next(error);
  }
};

export const getSIngleProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const products = await Products.findById(id);
    if (!products) {
      return res.json({ err: `No product with the ${id} found ` });
    }
    res.json({ products });
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};
