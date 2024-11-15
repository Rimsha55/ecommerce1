const express = require('express');
const router = express.Router()

const {
    createCart,
    getCart,
    updateCartItems,
    deleteCart,
    deleteCartItems,
}=require("../controllers/cardController");
const {cartschema,getcartschema } = require('../validations/cart')
const validate = require('../middleware/validate')



router.post("/cart",validate(cartschema),  createCart);
router.get("/getcart",validate(getcartschema), getCart)           
            


module.exports=router