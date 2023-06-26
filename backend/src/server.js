require("dotenv").config();
const app = require("./app");
const cloudinary = require("cloudinary");
const { connectDatabase } = require("./config/database");

process.on("uncaughtException", (err) => {
  console.log(`UncaughtError Occure ${err.message}`);
  process.exit(1);
});

//connect Database
connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const server = app.listen(process.env.PORT, function () {
  console.log("Express app running on port " + process.env.PORT);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
