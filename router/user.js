const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator')
const userContr = require('../controller/user')
const { User } = require('../model')
const userValidator = require('../validator/user')

// Get Current User
router.get('/user', userContr.getCur)

// Update User
router.put('/user', userContr.update)

// Authentication 用户登录
router.post('/users/login',userValidator.login , userContr.login)

// Registration 用户注册
router.post('/users', userValidator.register , userContr.register)

module.exports = router
