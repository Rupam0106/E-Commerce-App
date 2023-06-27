const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

exports.isAuthenticate = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;
  const accessToken = req.headers["authorization"];
  if (!token && !accessToken) {
    return next(
      new ErrorHandler("Please Login to first- No token Provided!", 401)
    );
  }
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await userModel.findById(decodedToken.id);
  next();
});
