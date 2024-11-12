
console.log(  require('dotenv').config());
const express =require('express')
const app = express()
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
module.exports = prisma





// routes import
const  reviewRoute = require('./routes/review');
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');
const verifyJWT = require('./middleware/JWTverify');
// routes call 
app.use(express.json());

app.get("/",(req,res)=>{
  res.send("working")
})
app.use("/user",userRoute)
app.use("/product",productRoute)
app.use("/review",reviewRoute)




app.listen(process.env.PORT,()=>{
  console.log("listening");
  
})