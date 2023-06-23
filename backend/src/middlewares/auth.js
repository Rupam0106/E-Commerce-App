const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

exports.isAuthenticate = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("Please Login to first !", 401));
  }
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await userModel.findById(decodedToken.id);
  next();
});
