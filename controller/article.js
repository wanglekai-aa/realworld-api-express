const { Article } = require("../model")

// Create Article
exports.createArticle = async (req, res, next) => {
    try {

        let article = new Article(req.body.article)
        await article.save()
        res.status(201).json({
            article
        })
        
    } catch (error) {
        next(error)
    }
}
