const { body, param } = require("express-validator")
const { isValidObjectId } = require('mongoose')
const valicator = require("../middleware/validata")

exports.createArticle = valicator([
    body('article.title').notEmpty().withMessage('文章标题不能为空!'),
    body('article.description').notEmpty().withMessage('文章描述不能为空!'),
    body('article.body').notEmpty().withMessage('文章内容不能为空!')
])

exports.getArticleById = valicator([
    param('articleId').custom(async val => {
        if(!isValidObjectId(val)) {
            return Promise.reject('文章ID类型错误')
        }
    })
])
