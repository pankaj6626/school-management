// backend/database/dbConnection.js
import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose.connect("mongodb+srv://pankajawasthi9569:fKWrUqvJCEigudIU@cluster0.ymplr0n.mongodb.net", {
    dbName: "SCHOOL_MANAGEMENT_SYSTEM",
  })
  .then(() => console.log("Connected to database"))
  .catch((error) => {
    console.log("Error occurred while connecting to database");
    console.error(error.message)
  });
};

