const db = require("../config/db");

const getCustomers = (req, res) => {
  db.query("Select *FROM customers", (error, results) => {
    if (error) {
      console.log("Error selecting customers");
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};
// customers qo`shish
const addCustomers= (req, res) => {
  const { fname, lname, phone, address, email } = req.body;
  // yangi sorav jonatish
  db.query(
    "INSERT INTO customers(fname, lname, phone, address, email)\
        VALUES(?,?,?,?,?)",
    [fname, lname, phone, address, email],
    (error, results) => {
      if (error) {
        console.log("Error adding new customers", error);
        return res
          .status(500)
          .json({
            message: "Error adding new customers",
            error: "Internal Server Error",
          });
      }
      res.status(201).json({
        message: "customer added successfully",
        customerid: results.insertId,
      });
    }
  );
};

// bitta guli olish
const getCustomersByID = (req, res) => {
  const customerId = req.params.id;
  db.query("SELECT * FROM customers WHERE customer_id = ?", [customerId], (error, result) => {
    if (error) {
      console.log("Error selecting customer by Id");
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if(res.length===0){
        return res
        .status(404)
        .json({message:"customer not found"})
    }
    return res.status(200).json(result);
  });
};


const putCustomersById=(req,res)=>{
  const customerId=req.params.id;
  const {fname, lname, phone, address, email}=req.body;
    db.query(
        "UPDATE customers SET fname=?, lname=?, phone=?, adress=?, email=? WHERE customer_id=?",
        [fname, lname, phone, address, email, customerId],
        (error, result) => {
          if (error) {
            console.log("Error updating custumer by Id", error);
            return res
             .status(500)
             .json({
                message: "Error updating custumer",
                error: "Internal Server Error",
              });
          }
          if(result.affectedRows===0){
              return res
             .status(404)
             .json({message:"customer not found"})
          }
          return res.status(200).json()
});}

const deleteCustumerById=(req,res)=>{
    const customerId=req.params.id;
    db.query("DELETE FROM customers WHERE customer_id=?",[customerId],(error,result)=>{
        if(error){
            console.log("Error deleting customer by Id");
            return res
           .status(500)
           .json({error:"Internal Server Error"})
        }
        
        res.json({message:"customer deleted successfully"})
    })
}
module.exports = {
  getCustomers,
  addCustomers,
  getCustomersByID,
  putCustomersById,
  deleteCustumerById,
};

