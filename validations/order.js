const Joi = require('joi')


        const OrderSchema = Joi.object({
            query:Joi.object({}),
            params:Joi.object({}),
            body:Joi.object({total_amount: Joi.number().positive().required(),
            name: Joi.string().min(3).max(100).required(),
            contact: Joi.string().pattern(/^[0-9]{10}$/).required(),
            address: Joi.string().min(10).max(500).required(),
            paymentmode: Joi.string().valid('COD', 'Card').required(),
            product_Id: Joi.string().uuid().required(),
            quantity: Joi.number().integer().min(1).required(),
            price: Joi.number().positive().required()})
            
          });


module.exports ={OrderSchema}