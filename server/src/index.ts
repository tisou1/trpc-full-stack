import cors from 'cors'
import express from 'express'
import * as trpcExpress from '@trpc/server/adapters/express'

import { appRouter } from './router'
import { createContext } from './context'

// 创建express应用
const app = express()

// 中间件, 使用cors,来做跨域
app.use(cors())

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext
  })
)

app.listen(4000)

export type AppRouter = typeof appRouter
