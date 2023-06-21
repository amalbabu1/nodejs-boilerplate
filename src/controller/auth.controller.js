const {createUser} = require('../services/user.services')
const {generateAuthTokens} = require('../services/token.service')

const register = async (req,res)=>{
    const user =await createUser(req.body)
    if(!user){
        return res.send("EMAIL ALREADY EXISTS IN THE SYSTEM {ADD STATUS CODE}")
    }
    const token = await generateAuthTokens(user.dataValues)
    console.log(token)
    res.send('User registed')
}

const login = async(req,res)=>{
    res.send('loggedin')
}

module.exports = {
    register,
    login
}