const { body } = require("express-validator")
const { User } = require("../model")
const valicator = require("../middleware/validata")
const md5 = require('../util/md5')

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

exports.login = [
    valicator([
        body('user.email')
            .notEmpty().withMessage('邮箱不能为空!')
            .isEmail().withMessage('邮箱格式不正确!'),
        body('user.password')
            .notEmpty().withMessage('密码不能为空!')
            
    ]),
    valicator([
        body('user.email').custom(async (email, { req }) => {
            // 这里的 req 是 request 请求对象
            const user = await User.findOne({ email })
                                .select(['password', 'username', 'email', 'bio', 'image', 'createdAt', 'updatedAt'])
            if (!user) {
                return Promise.reject('用户不存在!')
            }
            // 本次请求为 同一个 requset，把 user 信息保存下来，后面的中间件可以访问到
            req.user = user
        })
    ]),
    valicator([
        body('user.password').custom(async (password, { req }) => {
            if (md5(password) !== req.user.password) {
                return Promise.reject('密码错误')
            }
        })
    ])
]
