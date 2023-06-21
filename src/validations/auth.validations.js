const Joi = require('joi')


const register ={
    body:Joi.object().keys({
        email:Joi.string().required().email(),
        password:Joi.string().required(),
        name:Joi.string().required()
    })
}

const login = {
    body:Joi.object().keys({
        email:Joi.string().required(),
        password:Joi.string().required()
    }),
}

module.exports = {
    register,
    login
}