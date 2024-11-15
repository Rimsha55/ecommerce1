const Joi = require("joi");

const productschema = Joi.object({
    query: Joi.object({}),
    params: Joi.object({}),
    body: Joi.object({
        productName: Joi.string().min(4).max(40).required(),
        description: Joi.string().min(4).max(300).required(),
        price: Joi.number().integer().positive().required(),
        quantity: Joi.number().integer().min(0).required(),
        product_size: Joi.array().items(Joi.string()).required(),
        product_color: Joi.array().items(Joi.string()).required()
    })
});

const getproduct =Joi.object({
    query: Joi.object({
        
    }),
    params: Joi.object({}),
    body: Joi.object({})

})
 module.exports ={ productschema,getproduct}

