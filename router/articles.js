const express = require('express')
const articleValidator = require('../validator/article')
const articleContr = require('../controller/article')
const router = express.Router()
const auth = require('../middleware/auth')

// List Articles
router.get('/', articleContr.getArticles)

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

// Update Article
router.put('/:articleId', auth, articleValidator.updateArticle, articleContr.updateArticle)

// Delete Article
router.delete('/:articleId', auth, articleValidator.deleteArticle, articleContr.deleteArticle)

// Add Comments to an Article
router.post('/:articleId/comments', auth, articleValidator.addComment, articleContr.addComment)

// Get Comments from an Article
router.get('/:articleId/comments', articleValidator.getCommentsByArt, articleContr.getCommentsByArt)

module.exports = router
