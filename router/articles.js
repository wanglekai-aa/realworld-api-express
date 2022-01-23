const express = require('express')
const articleValidator = require('../validator/article')
const articleContr = require('../controller/article')
const router = express.Router()
const auth = require('../middleware/auth')

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
router.get('/:articleId', articleValidator.getArticleById, articleContr.getArticleById)

// Create Article
router.post('/',auth,  articleValidator.createArticle, articleContr.createArticle)

module.exports = router
