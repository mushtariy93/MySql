const express = require("express");


const { getCustomers, getCustomersByID, putCustomersById, addCustomers, deleteCustumerById } = require("../controllers/customer");

const router = express.Router();

router.get("/", getCustomers);
router.get("/:id",getCustomersByID);
router.put("/:id", putCustomersById);

router.post("/", addCustomers);
router.delete("/:id", deleteCustumerById);

module.exports = router;
