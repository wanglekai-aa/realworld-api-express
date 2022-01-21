const express = require('express')
const router = express.Router()
const userContr = require('../controller/user')

// Get Current User
router.get('/user', userContr.getCur)

// Update User
router.put('/user', userContr.update)

// Authentication
router.post('/users/login', userContr.login)

// Registration
router.post('/users',userContr.register)

module.exports = router
