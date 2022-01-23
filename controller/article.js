const { Article } = require("../model")

// Create Article
exports.createArticle = async (req, res, next) => {
    try {

        let article = new Article(req.body.article)
        article.author = req.user._id
        // 作者信息 映射到 返回到数据中
        article.populate('author')

        await article.save()
        res.status(201).json({
            article
        })
        
    } catch (error) {
        next(error)
    }
}
