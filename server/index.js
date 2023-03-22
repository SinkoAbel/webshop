import express from "express";

const app = express();

const connect = async () => {
  try {
      // TODO:
      // await mongoose.connect(process.env.MONGO);
      console.log("Connected to mongoDB");
  } catch (error) {
      throw error;
  }
};

app.listen(8800, () => {
    connect();
    console.log("Connected to backend!");
    console.log("Port opened at: http://localhost:8800/");
});