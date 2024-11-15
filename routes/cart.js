const express = require('express');
const router = express.Router()

const {
    createCart,
    getCart,
    updateCartItems,
    deleteCart,
    deleteCartItems,
}=require("../controllers/cardController");
const {cartschema } = require('../validations/cart')
const validate = require('../middleware/validate')



router.post("/cart",validate(cartschema),  createCart);           
            


module.exports=router