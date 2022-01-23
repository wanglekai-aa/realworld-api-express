const express = require('express')
const articleValidator = require('../validator/article')
const articleContr = require('../controller/article')
const router = express.Router()

// List Articles
router.get('/', async (req, res, next) => {
    try {
        res.send('Get List Articles')
    } catch (err) {
        next(err)
    }
})

// Feed Articles
router.get('/feed', async (req, res, next) => {
    try {
        res.send('get Feed Articles')
    } catch (err) {
        next(err)
    }
})

// Get Article
router.get('/:slug', async (req, res, next) => {
    try {
        res.send('Get Article')
    } catch (err) {
        next(err)
    }
})

// Create Article
router.post('/', articleValidator.createArticle, articleContr.createArticle)

module.exports = router
