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
) => {
  try {
    const {
      name,
      price,
      description,
      size,
      category,
      quantity,
      discountPrice,
      richDescription,
    } = req.body;

    if (!req.body) {
      return res.json({
        Error: "The fields are required",
      });
    }
    const file = req.file?.path;
    const products = new Products({
      name,
      price,
      description,
      size,
      image: file,
      category,
      quantity,
      discountPrice,
      richDescription,
    });
    await products.save();
    res.json({ products });
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      name,
      price,
      description,
      size,
      category,
      quantity,
      discountPrice,
      richDescription,
    } = req.body;

    const { id } = req.params;

    if (!req.body) {
      return res.json({
        Error: "The fields are required",
      });
    }
    const products = await Products.findByIdAndUpdate(id, {
      name,
      price,
      description,
      size,
      category,
      quantity,
      discountPrice,
      richDescription,
    });
    res.json({
      Message: `Product with the id of ${id} has been updated`,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const products = await Products.findByIdAndDelete(id);
    if (!products) {
      return res.json({
        Err: `No Product with the id of ${id} found`,
      });
    }
    res.json({
      Message: `Product with the id of ${id} has been Deleted successfully`,
    });
  } catch (error) {
    next(error);
  }
};
