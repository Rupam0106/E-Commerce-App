const ErrorHandler = require("./middlewares/error");
const express = require("express");
const User = require("./routes/userRoute");
const cookie = require("cookie-parser");
const app = express();
const multer=require("multer")
const bodyParser = require("body-parser");

app.use(cookie());
app.use(express.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ extended: true }));
const upload = multer();
app.use(upload.any());

app.use("/api/v1/user", User);

//error handle middleware
app.use(ErrorHandler);

module.exports = app;
