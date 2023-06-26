const express = require("express");
const { isAuthenticate } = require("../middlewares/auth");
const { updateCartById ,getCartById,deleteCartById,createCart} = require("../controllers/cartController");

const router = express.Router();

router
  .route("/")
  .post(isAuthenticate, createCart)
  .put(isAuthenticate, updateCartById)
  .get(isAuthenticate, getCartById)
  .delete(isAuthenticate, deleteCartById);

module.exports = router;
