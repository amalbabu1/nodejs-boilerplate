const express= require("express")
const userValidation = require('../../validations/user.validations')
const validate = require("../../middleware/validate");
const { userController } = require("../../controller");
// const auth = require("../../middleware/auth");
const passport = require('passport');
const auth = require("../../middleware/auth");

const router = express.Router();

router.route('/')
.post(validate(userValidation.createUser),userController.createUser)
.get(passport.authenticate('jwt', { session: false }),(req,res)=>{
    console.log(req.user)
    res.send(req.user)
})



module.exports = router