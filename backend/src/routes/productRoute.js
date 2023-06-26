const express = require("express");
const { isAuthenticate } = require("../middlewares/auth");
const {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
} = require("../controllers/productController");
const router = express.Router();

router.route("/all").get(getAllProduct);
router.route("/new").post(isAuthenticate, createProduct);
router
  .route("/:id")
  .put(updateProduct)
  .delete(deleteProduct)
  .get(getSingleProduct);

module.exports = router;
