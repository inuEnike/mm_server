import mongoose, { Schema, Document } from "mongoose";

interface IProduct extends Document {
  name: string;
  price: number;
  size?: string[];
  image?: string[];
  quantity: number;
  discountPrice?: number;
  category: mongoose.Types.ObjectId;
  description?: string;
  richDescription?: string;
}

const ProductSchema: Schema = new Schema<IProduct>({
  name: {
    type: String,
    required: [true, "The Name field is mandatory"],
  },
  price: {
    type: Number,
    required: [true, "The Price field is mandatory"],
  },
  description: {
    type: String,
  },
  image: {
    type: [String], // Array of strings (URLs) for images
    default: [], // Default empty array
  },
  size: {
    type: [String], // Array of strings for sizes
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category", // Reference to the category model
    required: [true, "The category field is mandatory"],
  },
  quantity: {
    type: Number,
    required: [true, "The Quantity field is mandatory"],
  },
  discountPrice: {
    type: Number,
    required: [true, "The Discount Price field is mandatory"],
  },
  richDescription: {
    type: String,
    required: [true, "The Rich Description field is mandatory"],
  },
});

const Products = mongoose.model("products", ProductSchema);

export default Products;
