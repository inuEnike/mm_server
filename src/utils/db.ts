import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGOOSE_URI = process.env.MONGOOSE_URI as string;

const dbConnector = async () => {
  try {
    await mongoose.connect(MONGOOSE_URI);
    console.log(`DATABASE FIRED UP`);
  } catch (error: any) {
    throw new Error(error);
  }
};

export default dbConnector;
