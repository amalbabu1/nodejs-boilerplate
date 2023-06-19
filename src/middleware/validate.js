//Reference
// const validate = (options)=>{
//     return function(req,res, next){
//         console.log(`Validated the req with ${options.name}`)
//         next()
//     }
// }
const Joi = require('joi')
const httpStatus = require('http-status')

// const pick = (object, keys) => {
//     return keys.reduce((obj, key) => {
//       if (object && Object.prototype.hasOwnProperty.call(object, key)) {
//         obj[key] = object[key];
//         // console.log(obj)
//       }
//       return obj;
//     }, {});
//   };



const validate = (schema) =>(req,res,next)=>{

    const validSchema = Joi.compile(schema)
    let object = {}
    object["body"]=req.body
    //validate compiled schema to the req.body
    const {value, error} = validSchema.validate(object)
    if(error){
        console.log(error)
        return next('Error handle it')
    }
    Object.assign(req, value)
    return next()
}


module.exports = validate