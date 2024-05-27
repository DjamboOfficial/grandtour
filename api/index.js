import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Mongo is connected!");
  })
  .catch((error) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server running on port 3000!");
});
