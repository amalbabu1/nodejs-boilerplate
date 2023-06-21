const express= require("express")
const userValidation = require('../../validations/user.validations')
const validate = require("../../middleware/validate");
const { userController } = require("../../controller");

const router = express.Router();

router
.get('/',(req,res)=>{
    res.send('hello user apis')
})
.post('/',validate(userValidation.createUser),userController.createUser)



module.exports = router