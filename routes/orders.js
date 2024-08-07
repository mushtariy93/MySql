const express = require("express");

const { getOrders, getOrdersByID, putOrdersById, addOrders, deleteOrdersById } = require("../controllers/orders");

const router = express.Router();

router.get("/", getOrders);
router.get("/:id", getOrdersByID);
router.put("/:id", putOrdersById);

router.post("/", addOrders);
router.delete("/:id", deleteOrdersById);

module.exports = router;
