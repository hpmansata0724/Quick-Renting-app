const {Router}=require('express')
const { getUsers, register } = require('../controller/auth')
const { registerValidation } = require('../validators/auth')
const { validationMiddleware } = require('../middlewares/validation-middleware')
const router =Router()
router.get('/get-users',getUsers)
router.post('/register',registerValidation,validationMiddleware,register)
module.exports=router