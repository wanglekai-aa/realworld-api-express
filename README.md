

## 案例介绍
- GitHub 仓库：https://github.com/gothinkster/realworld
- 客户端在线示例：https://demo.realworld.io/
- 接口文档：https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints

## 目录结构
- config	# 配置文件
    - config.default.js
- controller	# 用于解析用户的输入，处理后返回相应的结果
- model	# 数据持久层
- middleware	# 用于编写中间件
- router	# 用于配置 URL 路由规则
- util	# 工具模块
- app.js	# 用于自定义启动时的初始化工作

## 路由设计
参照：https://realworld-docs.netlify.app/docs/specs/backend-specs/endpoints
