const express = require("express");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());
app.post("/save",(req,res)=>{
    let num1 = parseInt(req.body.number);
    console.log(num1);
    let r  = num1 % 2;
    if(num1 % 2 === 0){
        res.json(" is Even");
    } 
    else{
        res.json(" is Odd");
    } 
});



app.listen(7002,()=>{console.log("Server ready at http://localhost:7002");});