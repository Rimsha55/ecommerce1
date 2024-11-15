
const express = require('express')
const { createProduct, getProduct, getproductId, Updateproduct } = require("../controllers/productController")

const{productschema}= require('../validations/product')
const validate = require('../middleware/validate')
const router = express.Router()



router.post('/create-product',validate(productschema), createProduct)
router.put('/updateProduct/:product_id', Updateproduct)
router.get('/get-products', getProduct)
router.get('/productById/:product_id', getproductId)
module.exports = router