const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./router')
const errorHandler = require('./middleware/error-handler')

const app = express()

const PORT = process.env.PORT || 3000

require('./model')
// 为客户端提供跨域资源请求
app.use(cors())

// 配置常用中间件
app.use(morgan('dev'))  // 日志输出

// 解析请求体
app.use(express.json())
app.use(express.urlencoded())

app.use('/api', router)
app.use(errorHandler())

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
