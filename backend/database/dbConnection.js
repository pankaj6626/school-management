// backend/database/dbConnection.js
import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose.connect(process.env.MONGO_URL, {
    dbName: "SCHOOL_MANAGEMENT_SYSTEM",
  })
  .then(() => console.log("Connected to database"))
  .catch((error) => {
    console.log("Error occurred while connecting to database");
    console.error(error.message)
  });
};

