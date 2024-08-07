const express = require('express');
const { getFlowers, addFlower, deleteFlowerById, getFlowerByID, putFlowersById }= require('../controllers/flower');
const { getOrderDetails, getOrderDetailsByID, putOrderDetailssById, addOrderDetails, deleteOrderDetailsById } = require('../controllers/orderDetails');

const router= express.Router();


router.get('/',getOrderDetails);
router.get("/:id",getOrderDetailsByID);
router.put("/:id",putOrderDetailssById)

router.post('/',addOrderDetails);
router.delete("/:id",deleteOrderDetailsById);

module.exports=router;