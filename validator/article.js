const { body } = require("express-validator")
// const { Article } = require("../model")
const valicator = require("../middleware/validata")

exports.createArticle = valicator([
    body('article.title').notEmpty().withMessage('文章标题不能为空!'),
    body('article.description').notEmpty().withMessage('文章描述不能为空!'),
    body('article.body').notEmpty().withMessage('文章内容不能为空!')
])
