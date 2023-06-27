const express = require("express");
const { isAuthenticate } = require("../middlewares/auth");
const { createOrder, updateOrder } = require("../controllers/orderController");

const router = express.Router();

router.route("/create").post(isAuthenticate, createOrder);
router.route("/cancel").put(isAuthenticate, updateOrder);

module.exports = router;
