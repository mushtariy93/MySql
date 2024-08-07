const db = require("../config/db");

const getOrders = (req, res) => {
  db.query("Select *FROM orders", (error, results) => {
    if (error) {
      console.log("Error selecting orders");
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};
// orders qo`shish
const addOrders = (req, res) => {
  const { customer_id, status_id, order_date } = req.body;
  // yangi sorav jonatish
  db.query(
    "INSERT INTO orders(customer_id, status_id, order_date)\
        VALUES(?,?,?)",
    [customer_id, status_id, order_date],
    (error, results) => {
      if (error) {
        console.log("Error adding new orders", error);
        return res.status(500).json({
          message: "Error adding new orders",
          error: "Internal Server Error",
        });
      }
      res.status(201).json({
        message: "Orders added successfully",
        flowerid: results.insertId,
      });
    }
  );
};

const getOrdersByID = (req, res) => {
  const orderId = req.params.id;
  db.query("SELECT * FROM orders WHERE order_id = ?", [orderId], (error, result) => {
    if (error) {
      console.log("Error selecting orders bu Id");
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if(res.length===0){
        return res
        .status(404)
        .json({message:"Orders not found"})
    }
    return res.status(200).json(result);
  });
};


const putOrdersById=(req,res)=>{
  const orderId=req.params.id;
  const { customer_id, status_id, order_date } = req.body;
    db.query(
      "UPDATE orders SET customer_id=?, status_id=?, order_date=? WHERE order_id=?",
      [customer_id, status_id, order_date],
      (error, result) => {
        if (error) {
          console.log("Error updating order by Id", error);
          return res.status(500).json({
            message: "Error updating order",
            error: "Internal Server Error",
          });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "Order not found" });
        }
        return res.status(200).json();
      }
    );}

const deleteOrdersById=(req,res)=>{
    const orderId=req.params.id;
    db.query("DELETE FROM orders WHERE order_id=?",[orderId],(error,result)=>{
        if(error){
            console.log("Error deleting order by Id");
            return res
           .status(500)
           .json({error:"Internal Server Error"})
        }
        
        res.json({message:"Order deleted successfully"})
    })
}
module.exports = {
  getOrders,
  addOrders,
  getOrdersByID,
  putOrdersById,
  deleteOrdersById,
};

