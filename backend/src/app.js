const ErrorHandler = require("./middlewares/error");
const express = require("express");
const User = require("./routes/userRoute");
const cookie = require("cookie-parser");
const cloudinary = require("cloudinary");
const app = express();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

app.use(cookie());
app.use(express.json());

app.use("/api/v1/user", User);

//error handle middleware
app.use(ErrorHandler);

module.exports = app;
