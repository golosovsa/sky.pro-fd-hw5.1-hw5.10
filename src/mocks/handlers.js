import { rest } from 'msw'
import { BACKEND } from '../app/settings'
import TRACKS from './tracks'

let favorites = []

export const handlers = [
  rest.post(`${BACKEND}user/signup/`, async (req, res, ctx) => {
    return res(ctx.status(201))
  }),
  rest.post(`${BACKEND}user/login/`, async (req, res, ctx) => {
    const { error } = await req.json()

    if (error) {
      return res(
        ctx.status(401),
        ctx.json({ detail: ['Пользователь с таким email или паролем не найден'] })
      )
    }
    return res(ctx.status(200))
  }),
  rest.post(`${BACKEND}user/token/`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ access: 'access', refresh: 'refresh' }))
  }),
  rest.get(`${BACKEND}catalog/track/all/`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(TRACKS))
  }),
  rest.get(`${BACKEND}catalog/track/favorite/all/`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(favorites))
  }),
  rest.post(`${BACKEND}catalog/track/:id/favorite/`, async (req, res, ctx) => {
    favorites.push({ id: req.params.id })
    return res(ctx.status(200))
  }),
  rest.delete(`${BACKEND}catalog/track/:id/favorite/`, async (req, res, ctx) => {
    favorites = favorites.filter((value) => value.id !== req.params.id)
    return res(ctx.status(200))
  })
]
