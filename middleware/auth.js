const { jwtSecret } = require('../config/config.default')
const { User } = require('../model')
const { verify } = require('../util/jwt')

/* 
    对需要认证用户信息的请求 统一进行校验认证
    通过 express 中间件的机制进行处理，提高可维护性
*/

module.exports = async (req, res, next) => {
    /**
     * 获取请求头中的 token
     * 验证 token 是否有效
     *    无效 => 发送响应 401 状态码
     *    有效 => 将用户信息读取出来挂载到 req 请求对象上，next
    */
   let token = req.headers['authentication']
   token = token ? token.split(' ')[1] : null

   if (!token) {
       return res.status(401).end()
   }
   
   try {
      const encodedToken = await verify(token, jwtSecret, {
          /**
           * 设置 token 有效时间 ，default: second
           * Eg: 1000, "2 days", "10h", "7d"
          */
          expiresIn: '24h'
      })
    //   console.log('encodedToken: ', encodedToken)
      req.user = await User.findById(encodedToken.userId)
      next()
   } catch (err) {
       console.log('token verify failed: ', err)
       return res.status(401).end()
   }
}
