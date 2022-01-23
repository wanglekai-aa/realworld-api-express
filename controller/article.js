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

// Get Article
exports.getArticleById = async (req, res, next) => {
    try {
        const article = await Article.findById(req.params.articleId).populate('author')

        if (!article) {
            return res.status(404).json({
                code: 1,
                error: 'article not found!'
            })
        }
        res.status(200).json({article})
    } catch (error) {
        next(error)
    }
}
