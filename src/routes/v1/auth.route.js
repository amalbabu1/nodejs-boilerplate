const express = require('express')
const { authValidation } = require('../../validations')
const validate = require('../../middleware/validate')
const authController = require('../../controller/auth.controller')
const router = express.Router()

router.post('/register',validate(authValidation.register),authController.register)
router.post('/login',validate(authValidation.login),authController.login)

module.exports = router