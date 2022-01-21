const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 3000

// 为客户端提供跨域资源请求
app.use(cors())

// 配置常用中间件
app.use(morgan('dev'))  // 日志输出

// 解析请求体
app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.post('/', (req, res) => {
  console.log(req.body)
  res.send('post /')
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
