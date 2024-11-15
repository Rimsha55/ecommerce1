require('dotenv').config();
const express =require('express')
const app = express()
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
module.exports = prisma;





// routes import
const  reviewRoute = require('./routes/review');
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');
const orderRoute = require('./routes/order');
const  cartRoute = require('./routes/cart')
const verifyJWT = require('./middleware/verifyJWT');
// routes call 
app.use(express.json());

app.get("/",(req,res)=>{
  res.send("working")
})
app.use("/user",userRoute)
app.use("/product",productRoute)
app.use("/review",reviewRoute)
app.use(verifyJWT)
app.use("/order",orderRoute)
app.use("/cart",cartRoute)



app.listen(process.env.PORT,()=>{
  console.log("listening..........");
  
})