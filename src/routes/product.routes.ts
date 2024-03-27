import express, { Router } from "express";
import upload from "../utils/cloudinary";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getSIngleProduct,
  updateProduct,
} from "../controllers/product.controllers";

const route = Router();
// upload.single("file"),
route
  .get("/", getAllProducts)
  .get("/:id", getSIngleProduct)
  .post("/", createProduct)
  .put("/:id", updateProduct)
  .delete("/:id", deleteProduct);

export default route;
