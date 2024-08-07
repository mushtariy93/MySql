const db = require("../config/db");

const getStatus = (req, res) => {
  db.query("SELECT * FROM status", (error, results) => {
    if (error) {
      console.log("Error selecting status");
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

const addStatus = (req, res) => {
  const { status_name } = req.body;
  db.query(
    "INSERT INTO status (status_name) VALUES (?)",
    [status_name],
    (error, results) => {
      if (error) {
        console.log("Error adding new status", error);
        return res.status(500).json({
          message: "Error adding new status",
          error: "Internal Server Error",
        });
      }
      res.status(201).json({
        message: "Status added successfully",
        statusid: results.insertId,
      });
    }
  );
};

const getStatusByID = (req, res) => {
  const statusId = req.params.id;
  db.query(
    "SELECT * FROM status WHERE status_id = ?",
    [statusId],
    (error, result) => {
      if (error) {
        console.log("Error selecting status by Id");
        return res.status(500).json({ error: "Internal Server Error" });
      }
      if (result.length === 0) {
        return res.status(404).json({ message: "Status not found" });
      }
      return res.status(200).json(result);
    }
  );
};

const putStatusById = (req, res) => {
  const statusId = req.params.id;
  const { status_name } = req.body;
  db.query(
    "UPDATE status SET status_name = ? WHERE status_id = ?",
    [status_name, statusId],
    (error, result) => {
      if (error) {
        console.log("Error updating status by Id", error);
        return res.status(500).json({
          message: "Error updating status",
          error: "Internal Server Error",
        });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Status not found" });
      }
      return res.status(200).json({ message: "Status updated successfully" });
    }
  );
};

const deleteStatusById = (req, res) => {
  const statusId = req.params.id;
  db.query(
    "DELETE FROM status WHERE status_id = ?",
    [statusId],
    (error, result) => {
      if (error) {
        console.log("Error deleting status by Id");
        return res.status(500).json({ error: "Internal Server Error" });
      }
      res.json({ message: "Status deleted successfully" });
    }
  );
};

module.exports = {
  getStatus,
  addStatus,
  getStatusByID,
  putStatusById,
  deleteStatusById,
};
