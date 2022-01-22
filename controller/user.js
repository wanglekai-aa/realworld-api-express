const { User } = require("../model")

exports.login = async (req, res, next) => {
    try {
        res.send('post / User login test...')
    } catch (err) {
        next(err)
    }
}
// Registration  用户注册
exports.register =  async (req, res, next) => {
    try {
        /**
         * 1. 获取请求数据  req.body
         * 2. 数据验证
         * 3. 验证通过，将数据保存到数据库中
         * 4. 发送响应
        */
        let user = new User(req.body.user)

        await user.save()
        /**
         * mongoose 提供的 模型对象，无法通过 delete 删除
         * 需要通过 .toJSON() 方法转为 普通的 JS 对象
        */

        user = user.toJSON()
        delete user.password

        res.status(201).json({
            user
        })
        // res.send('POST /api/users Registration ...')
    } catch (err) {
        next(err)
    }
}
exports.update = async (req, res, next) => {
    try {
        res.send('put / Update User ... ')
    } catch (err) {
        next(err)
    }
}
exports.getCur = async (req, res, next) => {
    try {
        res.send('Get Current User')
    } catch (err) {
        next(err)
    }
}
