const express = require('express')

const router = express.Router()

// Get Profile
router.get('/:username', async (req, res, next) => {
    try {
        res.send('Get Profile')
    } catch (err) {
        next(err)
    }
})

// Follow user
router.post('/:username/follow', async (req, res, next) => {
    try {
        res.send('post / follow User')
    } catch (err) {
        next(err)
    }
})

// Unfollow user
router.delete('/:username/follow', async (req, res, next) => {
    try {
        res.send('delete / Unfollow User')
    } catch (err) {
        next(err)
    }
})

module.exports = router
