const express = require('express')

const router = express.Router()

// Get Current User
router.get('/user', async (req, res, next) => {
    try {
        res.send('Get Current User')
    } catch (err) {
        next(err)
    }
})

// Update User
router.put('/user', async (req, res, next) => {
    try {
        res.send('put / Update User')
    } catch (err) {
        next(err)
    }
})

// Authentication
router.post('/users/login', async (req, res, next) => {
    try {
        res.send('post / User login')
    } catch (err) {
        next(err)
    }
})

// Registration
router.post('/users', async (req, res, next) => {
    try {
        res.send('POST /api/users Registration')
    } catch (err) {
        next(err)
    }
})

module.exports = router
