const express = require('express');
const { getFlowers, addFlower, deleteFlowerById, getFlowerByID, putFlowersById }= require('../controllers/flower');

const router= express.Router();


router.get('/',getFlowers);
router.get("/:id",getFlowerByID);
router.put("/:id",putFlowersById)

router.post('/',addFlower);
router.delete("/:id",deleteFlowerById);

module.exports=router;