const catchAsyncError = require("../middlewares/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const { emptyCart } = require("../utils/helper");
const Order = require("../models/orderModel");
const Cart = require("../models/cartModel");

// create order
exports.createOrder = catchAsyncError(async (req, res, next) => {
  const { cartId } = req.body;
  if (!cartId) {
    return next(new ErrorHandler(`Please send your cart id!`, 400));
  }
  // getting cart details using cartId
  const cart = await Cart.findById(cartId);
  if (!cart || !cart.totalItems) {
    return next(
      new ErrorHandler(
        `${!cart ? "cart not found!" : " Your cart is empty!"}`,
        400
      )
    );
  }

  // creting an object to create a new order
  const Obj = JSON.parse(JSON.stringify(cart));

  // remocing extra field of the object
  [("_id", "createdAt", "updatedAt", "__v")].map((el) => delete Obj[el]);

  // create a order after removing unwanted field
  const order = await Order.create(Obj);

  //after successfully order creation making card empty
  await emptyCart(cart);

  res.status(201).json({
    status: true,
    message: "Success",
    data: {
      order,
    },
  });
});

// update order status means cancel the order
exports.updateOrder = catchAsyncError(async (req, res, next) => {
  const order = await Order.findById(req.body.orderId);

  // if not order wwith this id
  if (!order) {
    return next(
      new ErrorHandler(`No order found with id: ${req.body.orderId}.`, 404)
    );
  }

  if (!order.cancellable) {
    return next(new ErrorHandler(`This order will not be cancel!`, 400));
  }

  // if order status is canceled
  if (order.status === "canceled") {
    return next(new ErrorHandler(`This order already canceled!`, 400));
  }

  // finally cancel the order
  order.status = "canceled";
  await order.save();
  res.status(200).json({
    status: true,
    message: "Success",
    data: {
      order,
    },
  });
});
