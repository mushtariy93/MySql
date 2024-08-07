const express=require('express');
require('dotenv').config();
const PORT=process.env.PORT 
// console.log(PORT);

const mainRouter=require("./routes/index");

const app=express();
app.use(express.json());

app.use("/api",mainRouter);

app.listen(PORT,()=>{
    console.log(`Server started at:http://localhost:${PORT}`);
})