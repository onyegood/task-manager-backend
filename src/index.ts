import { app } from "./app";
import mongoose from "mongoose";
require('dotenv').config(); //Load environment veriables


const start = async () => {
  if (!process.env.MONGO_URI){
    throw new Error('MONGO_URI must be defined!');
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    console.log("Connected to mongoDB.");

  } catch (error) {
    console.error(error);
  }

  app.listen(process.env.PORT || 5000, () => {
    console.log("task-manager-service:5000");
  });
};

start();