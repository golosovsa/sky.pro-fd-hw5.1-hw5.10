import { rest } from 'msw'
import { BACKEND } from '../app/settings'

export const handlers = [
  rest.post(`${BACKEND}user/signup/`, (req, res, ctx) => {
    return res(ctx.status(201))
  }),
  rest.post(`${BACKEND}user/login/`, (req, res, ctx) => {
    return res(ctx.status(200))
  }),
  rest.post(`${BACKEND}user/token/`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ access: 'access', refresh: 'refresh' }))
  })
]
