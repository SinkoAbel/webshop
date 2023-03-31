import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const connect = async () => {
  try {
      await mongoose.connect(process.env.MONGO);
      console.log("Connected to MongoDB");
  } catch (error) {
      throw error;
  }
};

app.listen(8800, () => {
    connect();
    console.log("Connected to backend!");
    console.log("Port opened at: http://localhost:8800/");
});