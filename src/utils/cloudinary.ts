import { v2 as cloudinary } from "cloudinary";
import multer, { Multer } from "multer";
import { CloudinaryStorage, Options } from "multer-storage-cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  allowedFormats: ["jpg", "jpeg", "png", "webp"],
  params: {
    folder: "images/mm_collections",
  },
} as Options);

const upload: Multer = multer({ storage });

export default upload;
