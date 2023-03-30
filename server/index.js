import express from "express";
import mongoose from "mongoose";

const app = express();

const connect = async () => {
  try {
      await mongoose.connect('mongodb+srv://ekke:ekke_2023@webshopdb.yvhhexx.mongodb.net/?retryWrites=true&w=majority');
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