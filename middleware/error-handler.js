const { format } = require('util')

module.exports = () => {
    return (err, req, res, next) => {
        res.status(500).json({
            // error: err.message
            // 仅在开发中使用，方便测试调试
            error: format(err)
        })
    }
}
