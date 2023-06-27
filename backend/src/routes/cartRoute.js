const express = require("express");
const { isAuthenticate } = require("../middlewares/auth");
const {
  updateCartById,
  getCartById,
  deleteCartById,
  createCart,
} = require("../controllers/cartController");

const router = express.Router();

router.route("/create").post(isAuthenticate, createCart);
router.route("/update").put(isAuthenticate, updateCartById);
router.route("/all").get(isAuthenticate, getCartById);
router.route("/delete/:id").delete(isAuthenticate, deleteCartById);

module.exports = router;
