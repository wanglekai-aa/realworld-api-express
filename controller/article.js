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
// List Articles
exports.getArticles = async (req, res, next) => {
    try {
        let { limit = 20, offset = 0, tag} = req.query

        // 查询文章列表-筛选标签
        const filter = {}
        if (tag) filter.tagList = tag

        const articles = await Article.find(filter)
            .limit(parseInt(limit)) // 获取多少条数据
            .skip(parseInt(offset)) // 跳过指定条数到数据

        const articlesCount = await Article.countDocuments()

        res.status(200).json({
            articles,
            articlesCount
        })
    } catch (error) {
        next(error)
    }
}
