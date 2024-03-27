import express, { Router } from "express";
import upload from "../utils/cloudinary";
import {
  getAllProducts,
  getSIngleProduct,
} from "../controllers/product.controllers";

const route = Router();
// upload.single("file"),
route.get("/", getAllProducts).get("/:id", getSIngleProduct);

export default route;
