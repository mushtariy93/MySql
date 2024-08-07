const express = require("express");

const router = express.Router();

const flowerRoute = require("./flower");
const customerRoute = require("./customer");
const statusRoute = require("./status");
const orderRoute = require("./orders");
const orderDetailsRoute=require("./orderDetails");

router.use("/flower", flowerRoute);
router.use("/customer", customerRoute);
router.use("/status", statusRoute);
router.use("/orders", orderRoute);
router.use("/ordersDetails", orderDetailsRoute);

module.exports = router;
