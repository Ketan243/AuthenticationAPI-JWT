//validation
const Joi = require('@hapi/joi');

const registerVal = (data) => {
    const schema = {
      name: Joi.string().required(),
      email: Joi.string().min(6).required().email(),
      password: Joi.string().min(6).required(),
    };
    return Joi.validate(data,schema);
}

const loginVal = (data)=>{
    const schema = {
      email: Joi.string().min(6).required().email(),
      password: Joi.string().min(6).required(),
    }
    return Joi.validate(data,schema);
}

module.exports.registerVal = registerVal;
module.exports.loginVal = loginVal;

