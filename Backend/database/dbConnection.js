import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.Mongo_url, {
      dbName: "Restaurant_management",
     
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection failed", error);
  }
};
