const httpStatus = require('http-status')
const User = require('../database/models/user')

const createUser = async (userBody)=>{
 //implement cehck if email is already used
 try{
    const created_user = await User.create(userBody)
    if (created_user){
        return created_user
        }
    }
    catch(error){
        //add error catching mecganism
        return null
    }
}



 


module.exports = {
    createUser
}