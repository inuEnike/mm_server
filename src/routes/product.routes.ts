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
// upload.single("file"),
routes
  .get("/", getAllProducts)
  .get("/:id", getSIngleProduct)
  .post("/", createProduct)
  .put("/:id", updateProduct)
  .delete("/:id", deleteProduct);

export default routes;
