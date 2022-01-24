const { Article, User } = require("../model")

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
        let { limit = 20, offset = 0, tag, author } = req.query

        // 查询文章列表
        const filter = {}
        if (tag) filter.tagList = tag // 筛选标签
        if (author) { // 筛选文章作者
            const user = await User.findOne({ username: author })
            filter.author = user ? user._id : null
        }

        const articles = await Article.find(filter)
            .limit(parseInt(limit)) // 获取多少条数据
            .skip(parseInt(offset)) // 跳过指定条数到数据
            .sort({
                // -1 倒叙，1 升序
                createdAt: -1
            })

        const articlesCount = await Article.countDocuments()

        res.status(200).json({
            articles,
            articlesCount
        })
    } catch (error) {
        next(error)
    }
}

// Update Article
exports.updateArticle = async (req, res, next) => {
    try {
        // console.log(req.body.article)
        // console.log(req.article)
        const article = req.article

        article.title = req.body.article.title || req.article.title
        article.description = req.body.article.description || req.article.description
        article.body = req.body.article.body || req.article.body
        article.updatedAt = Date.now()

        await article.save()
        res.status(200).json({
            code: 0,
            meg: 'update article success!',
            data: article
        })
    } catch (error) {
        next(error)
    }
}

// Delete Article
exports.deleteArticle = async (req, res, next) => {
    try {
        const article = req.article

        await article.remove()
        // res.status(204).json({
        res.status(200).json({
            code: 0,
            meg: 'delete article success!',
            data: []
        })
    } catch (error) {
        next(error)
    }
}
