const express = require("express");
const {
  getStatus,
  getStatusByID,
  addStatus,
  putStatusById,
  deleteStatusById,
} = require("../controllers/status");

const router = express.Router();

router.get("/", getStatus);
router.get("/:id", getStatusByID);
router.put("/:id", putStatusById);
router.post("/", addStatus);
router.delete("/:id", deleteStatusById);

module.exports = router;
