const jwt = require('jsonwebtoken')
const { promisify } = require('util')

exports.sign = promisify(jwt.sign)
exports.verify = promisify(jwt.verify)
exports.decode = promisify(jwt.decode)

/**
 *  生成 jwt 
    jwt.sign({
        foo: 'bar'
    }, 'tdddd', (err, token) => {
        if (err) {
            return console.log('token 生成失败: ', err);
        }
        console.log(token);
    })
*/

/**
 *  验证 jwt
    jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2NDsI5NDQyNTB9.j0PR62bCfEizhaGbR6tVSsfVBjcgFjTHn9v6iOUvtmM', 
    'tdddd', (err, ret) => {
        if (err) {
            return console.log('token 校验失败!', err)
        }
        console.log(ret)
    })
*/
