const { body } = require("express-validator")
const { User } = require("../model")
const valicator = require("../middleware/validata")

exports.register = valicator([
    //  配置验证规则
    body('user.username')
        .notEmpty().withMessage('用户名不能为空!')
        .custom(async username => {
            const user = await User.findOne({ username })
            if (user) {
                return Promise.reject('用户名已存在!')
            }
        }),
    body('user.password').notEmpty().withMessage('密码不能为空!'),
    body('user.email')
        .notEmpty().withMessage('邮箱不能为空!')
        .isEmail().withMessage('邮箱格式不正确!')
        .bail()
        .custom(async email => {
            const user = await User.findOne({ email })
            if (user) {
                return Promise.reject('邮箱已存在!')
            }
        })
])
