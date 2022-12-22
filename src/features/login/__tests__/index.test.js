import { rest } from 'msw'
import { BACKEND } from '../../../app/settings'
import { setupServer } from 'msw/node'
import { customRender, setupApiStore } from '../../../mock/test-utils'
import { userApi } from '../../../app/services/user'
import { render, fireEvent, screen } from '@testing-library/react'
import LoginFeature from '..'

const handlers = [
  rest.post(`${BACKEND}/user/signup/`, (req, res, ctx) => {
    return res(ctx.status(201))
  }),
  rest.post(`${BACKEND}/user/signin/`, (req, res, ctx) => {
    return res(ctx.status(200))
  }),
  rest.post(`${BACKEND}/user/token/`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ access: 'access', refresh: 'refresh' }))
  })
]

const server = setupServer(...handlers)
const storeRef = setupApiStore(userApi)

describe('login feature', () => {
  beforeAll(() => {
    localStorage.clear()
    server.listen()
  })

  afterEach(() => {
    server.resetHandlers()
  })

  afterAll(() => server.close())

  it('should change to signun and back to signin', async () => {
    customRender(<LoginFeature />, { wrapper: storeRef.wrapper })

    fireEvent.click(screen.getByText(/Зарегистрироваться/i))
    expect(screen.getByPlaceholderText(/Повторите пароль/i)).toBeInTheDocument()
    fireEvent.change(screen.getByPlaceholderText(/Логин/i), { target: { value: 'login' } })
    fireEvent.change(screen.getByPlaceholderText(/Пароль/i), { target: { value: 'password' } })
    fireEvent.change(screen.getByPlaceholderText(/Повторите пароль/i), {
      target: { value: 'password' }
    })

    fireEvent.click(screen.getByText(/Зарегистрироваться/i))

    expect(await screen.findByPlaceholderText(/Повторите пароль/i)).not.toBeInTheDocument()
  })
})
