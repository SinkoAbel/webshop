import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import productsRoute from "./routes/products.js";
import ordersRoute from "./routes/orders.js";
import cors from "cors";

const app = express();
dotenv.config();

const connect = async () => {
  try {
      await mongoose.connect(process.env.MONGO);
      console.log("Connected to MongoDB!");
  } catch (error) {
      throw error;
  }
};

mongoose.connection.on("disconnect", () =>{
    console.log("Disconnected from MongoDB!");
});

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/products", productsRoute);
app.use("/api/orders", ordersRoute);


app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong.";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    });
});

app.listen(8800, () => {
    connect();
    console.log("Connected to backend!");
    console.log("Port opened at: http://localhost:8800/");
});

app.use(express.json());
