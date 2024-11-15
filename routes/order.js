const express = require('express');
const router = express.Router()
const app = express()

const { createOrder, getAllOrders, getUserOrders, updateOrderStatus } = require('../controllers/orderController')
const validate = require('../middleware/validate')
const { createOrderSchema, updateOrderStatusSchema } = require('../validations/order')
const verifyJWT = require('../middleware/verifyJWT')


router.post('/create-order',verifyJWT,validate(createOrderSchema) ,createOrder)
router.post('/createorder', createOrder)
router.get('/getorder', getAllOrders)
router.post('/userorder', getUserOrders)
router.put('/updatstatus/:id', updateOrderStatus)
module.exports = router