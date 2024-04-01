import express, { Router } from "express";
import upload from "../utils/cloudinary";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getSIngleProduct,
  updateProduct,
} from "../controllers/product.controllers";

const routes = Router();
routes
  .get("/", getAllProducts)
  .get("/:id", getSIngleProduct)
  .post("/", upload.single("file"), createProduct)
  .put("/:id", updateProduct)
  .delete("/:id", deleteProduct);

export default routes;
