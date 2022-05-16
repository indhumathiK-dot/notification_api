import mongoose from "mongoose";

const mongoConnectionURL = "mongodb://localhost:27017/customNotification";

export const databaseConnection = () => {
  mongoose
    .connect(mongoConnectionURL)
    .then(() => {
      console.log("Database Server Connected");
    })
    .catch((err) => {
      console.log("Database Connection Error", err);
    });
};
