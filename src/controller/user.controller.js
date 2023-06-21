const httpStatus = require("http-status")
const User = require('../database/models/user')

const createUser = async (req, res)=>{
    const user = req.body
    const created_user =await User.create(req.body)
    res.status(httpStatus.CREATED).send(user)
}

module.exports = {
    createUser
}