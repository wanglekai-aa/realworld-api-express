const express = require('express')
const router = express.Router()
const userContr = require('../controller/user')
const userValidator = require('../validator/user')
const auth = require('../middleware/auth')

// Get Current User
router.get('/user',auth, userContr.getCur)

// Update User
router.put('/user',auth, userContr.update)

// Authentication 用户登录
router.post('/users/login',userValidator.login , userContr.login)

// Registration 用户注册
router.post('/users', userValidator.register , userContr.register)

module.exports = router
