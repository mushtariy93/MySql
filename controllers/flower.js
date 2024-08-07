const db = require("../config/db");

const getFlowers = (req, res) => {
  db.query("Select *FROM flowers", (error, results) => {
    if (error) {
      console.log("Error selecting flowers");
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
};
// flowers qo`shish
const addFlower = (req, res) => {
  const { name, color, price, flower_type, imported_from } = req.body;
  // yangi sorav jonatish
  db.query(
    "INSERT INTO flowers(name, color, price, flower_type, imported_from)\
        VALUES(?,?,?,?,?)",
    [name, color, price, flower_type, imported_from],
    (error, results) => {
      if (error) {
        console.log("Error adding new flowers", error);
        return res
          .status(500)
          .json({
            message: "Error adding new flowers",
            error: "Internal Server Error",
          });
      }
      res.status(201).json({
        message: "Flower added successfully",
        flowerid: results.insertId,
      });
    }
  );
};

// bitta guli olish
const getFlowerByID = (req, res) => {
  const flowerId = req.params.id;
  db.query("SELECT * FROM flowers WHERE flower_id = ?", [flowerId], (error, result) => {
    if (error) {
      console.log("Error selecting flower bu Id");
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if(res.length===0){
        return res
        .status(404)
        .json({message:"Flower not found"})
    }
    return res.status(200).json(result);
  });
};


const putFlowersById=(req,res)=>{
  const flowerId=req.params.id;
  const {name, color, price, flower_type, imported_from}=req.body;
    db.query(
        "UPDATE flowers SET name=?, color=?, price=?, flower_type=?, imported_from=? WHERE flower_id=?",
        [name, color, price, flower_type, imported_from, flowerId],
        (error, result) => {
          if (error) {
            console.log("Error updating flower by Id", error);
            return res
             .status(500)
             .json({
                message: "Error updating flower",
                error: "Internal Server Error",
              });
          }
          if(result.affectedRows===0){
              return res
             .status(404)
             .json({message:"Flower not found"})
          }
          return res.status(200).json()
});}

const deleteFlowerById=(req,res)=>{
    const flowerId=req.params.id;
    db.query("DELETE FROM flowers WHERE flower_id=?",[flowerId],(error,result)=>{
        if(error){
            console.log("Error deleting flower by Id");
            return res
           .status(500)
           .json({error:"Internal Server Error"})
        }
        
        res.json({message:"Flower deleted successfully"})
    })
}
module.exports = {
  getFlowers,
  addFlower,
  getFlowerByID,
  putFlowersById,
  deleteFlowerById,
};

