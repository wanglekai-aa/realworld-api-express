const { body } = require("express-validator")
const validata = require("../middleware/validata")
const { Article } = require("../model")

exports.createArticle = validata([
    body('article.title').notEmpty().withMessage('文章标题不能为空!'),
    body('article.description').notEmpty().withMessage('文章描述不能为空!'),
    body('article.body').notEmpty().withMessage('文章内容不能为空!')
])

exports.getArticleById = validata([
    // param('articleId').custom(async val => {
    //     if(!isValidObjectId(val)) {
    //         return Promise.reject('文章ID类型错误')
    //     }
    // })
    validata.isValidObjectId(['params'], 'articleId')
])

exports.updateArticle = [
    /* 
        更新文章 需要校验：
        1. 文章是否存在
        2. 修改的文章是否为当前登录用户
    */

    validata([
        validata.isValidObjectId(['params'], 'articleId')
    ]),
    async (req ,res ,next) => {
        let articleId = req.params.articleId
        const article =  await Article.findById(articleId)

        if (!article) {
            return res.status(404).json({
                code: 1,
                error: '文章不存在!'
            })
        }
        req.article = article
        next()
    },
    async (req, res, next) => {
        if (req.user._id.toString() !== req.article.author.toString()) {
            return res.status(403).json({
                code: 2,
                error: '无权限修改!'
            })
        }
        next()
    }
]
exports.deleteArticle = exports.updateArticle

exports.addComment = [
    validata([
        validata.isValidObjectId(['params'], 'articleId')
    ]),
    async (req ,res ,next) => {
        let articleId = req.params.articleId
        const article =  await Article.findById(articleId)

        if (!article) {
            return res.status(404).json({
                code: 1,
                error: '文章不存在!'
            })
        }
        req.article = article
        next()
    },
    validata([
        body('comment.body').notEmpty().withMessage('评论内容不能为空!')
    ])
]
exports.getCommentsByArt = exports.getArticleById
