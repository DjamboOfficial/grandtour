import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";

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

app.use("/api/user", userRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000!");
});
