const db = require("../config/db");

const getOrderDetails = (req, res) => {
  db.query("Select *FROM order_details", (error, results) => {
    if (error) {
      console.log("Error selecting order_details");
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};

const addOrderDetails = (req, res) => {
  const { order_id, flower_id, quantity } = req.body;
  // yangi sorav jonatish
  db.query(
    "INSERT INTO order_detailss(order_id, flower_id, quantity)\
        VALUES(?,?,?)",
    [order_id, flower_id, quantity],
    (error, results) => {
      if (error) {
        console.log("Error adding new order_detailss", error);
        return res.status(500).json({
          message: "Error adding new order_detailss",
          error: "Internal Server Error",
        });
      }
      res.status(201).json({
        message: "order_details added successfully",
        order_detailsid: results.insertId,
      });
    }
  );
};


const getOrderDetailsByID = (req, res) => {
  const order_detailsId = req.params.id;
  db.query("SELECT * FROM order_detailss WHERE order_details_id = ?", [order_detailsId], (error, result) => {
    if (error) {
      console.log("Error selecting order_details bu Id");
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if(res.length===0){
        return res
        .status(404)
        .json({message:"order_details not found"})
    }
    return res.status(200).json(result);
  });
};


const putOrderDetailssById=(req,res)=>{
  const order_detailsId=req.params.id;
  const { order_id, flower_id, quantity } = req.body;
    db.query(
      "UPDATE order_detailss SET order_id=?, flower_id=?, quantity=? WHERE order_details_id=?",
      [order_id, flower_id, quantity],
      (error, result) => {
        if (error) {
          console.log("Error updating order_details by Id", error);
          return res.status(500).json({
            message: "Error updating order_details",
            error: "Internal Server Error",
          });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "order_details not found" });
        }
        return res.status(200).json();
      }
    );}

const deleteOrderDetailsById=(req,res)=>{
    const order_detailsId=req.params.id;
    db.query("DELETE FROM order_detailss WHERE order_details_id=?",[order_detailsId],(error,result)=>{
        if(error){
            console.log("Error deleting order_details by Id");
            return res
           .status(500)
           .json({error:"Internal Server Error"})
        }
        
        res.json({message:"order_details deleted successfully"})
    })
}
module.exports = {
  getOrderDetails,
  addOrderDetails,
  getOrderDetailsByID,
  putOrderDetailssById,
  deleteOrderDetailsById,
};

