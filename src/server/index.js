/* eslint-disable promise/always-return */
import express from 'express'
import { matchRoutes } from 'react-router-config'
import proxy from 'express-http-proxy'
import routers from '@/routers'
import { getStore } from '@/store'
import renderLayout from './layout'
import { SERVER_BASEURL } from '@/utils/config'

const app = express()
app.use(express.static('public')) // 服务器渲染使用静态文件

// 相当于拦截到了前端请求地址中的/api部分，然后换成另一个地址
app.use(
  '/api',
  proxy(SERVER_BASEURL, {
    proxyReqPathResolver(request) {
      return `/api${request.url}`
    },
  }),
)

app.get('*', (request, res) => {
  const store = getStore()
  const branch = matchRoutes(routers, request.path)
  const promises = []
  const context = {
    css: [],
  }
  branch.forEach((item) => {
    if (item.route.loadData) {
      // 包裹一层 promise 实例，阻止服务端请求错误导致 Promise.all 方法错误
      const promise = new Promise((resolve) => {
        item.route.loadData(store).then(resolve).catch(resolve)
      })
      promises.push(promise)
    }
  })

  Promise.all(promises)
    .then(() => {
      const content = renderLayout(request, store, routers, context)

      // 如果当前页面不存在，则设置http请求的状态码
      if (context.notFound) {
        return res.status(404)
      }
      return res.send(content)
    })
    .catch((error) => {
      console.log(error)
    })
})

app.listen(3001, () => {
  console.log('3001')
})
