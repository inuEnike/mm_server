import mongoose, { Schema, Document } from "mongoose";

interface ICategory extends Document {
  name: string[];
}

const categorySchema = new mongoose.Schema<ICategory>(
  {
    name: {
      type: [String],
      required: [true, "The name field is required"],
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("category", categorySchema);
export default Category;
