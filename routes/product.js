
const express = require('express')

const router = express.Router()
const app = express()

const { createProduct, getProduct, getproductId, Updateproduct } = require("../controllers/productController")
const verifyJWT = require('../middleware/JWTverify')

router.get('/get-products', getProduct)
router.get('/productById/:product_id', getproductId)
app.use(verifyJWT)
router.post('/create-product', createProduct)
router.put('/updateProduct/:product_id', Updateproduct)
module.exports = router