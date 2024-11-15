
const Joi = require('joi')
// const { query } = require('express')
const cartschema= Joi.object({
    query:Joi.object({}),
    params:Joi.object({}),
    object: Joi.object({}),
    body:Joi.object({
        productId : Joi.string().required(),
    })
})
const getcartschema= Joi.object({
    query:Joi.object({}),
    params:Joi.object({}),
    object: Joi.object({}),
    body:Joi.object({
        productId : Joi.string().required(),
    })
})



module.exports={cartschema};