const Joi = require("joi")



const getEmployeeListValidaton = Joi.object({
    firstName:Joi.string().required(),
    lastName:Joi.string().required(),
    age:Joi.number().required(),
    desig:Joi.string().required(),
    depart:Joi.string().required()
})



module.exports = {
    getEmployeeListValidaton,
}