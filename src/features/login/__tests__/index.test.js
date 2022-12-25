import { setupApiStore } from '../../../mocks/test-utils'
import { userApi } from '../../../app/services/user'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import LoginFeature from '..'
import { Navigate } from 'react-router-dom'

jest.mock('react-router-dom', () => ({
  Navigate: jest.fn()
}))

afterAll(() => {
  jest.unmock('react-router-dom')
})

const storeRef = setupApiStore(userApi)

describe('login feature', () => {
  it('should change to sign up, sign up, and back to login', async () => {
    render(<LoginFeature />, { wrapper: storeRef.wrapper })

    expect(screen.queryByPlaceholderText(/Повторите пароль/i)).toBeNull()
    fireEvent.click(screen.getByText(/Зарегистрироваться/i))
    expect(await screen.findByPlaceholderText(/Повторите пароль/i)).toBeVisible()
    fireEvent.change(await screen.findByPlaceholderText(/Логин/i), { target: { value: 'login' } })
    fireEvent.change(await screen.findByPlaceholderText(/^Пароль/i), {
      target: { value: 'password' }
    })
    fireEvent.change(await screen.findByPlaceholderText(/Повторите пароль/i), {
      target: { value: 'password' }
    })
    fireEvent.click(await screen.findByText(/Зарегистрироваться/i))

    await waitFor(() => {
      expect(screen.queryByPlaceholderText(/Повторите пароль/i)).toBeNull()
    })
  })

  it('should redirect to "/" after login', async () => {
    render(<LoginFeature />, { wrapper: storeRef.wrapper })

    fireEvent.change(screen.getByPlaceholderText(/Логин/i), { target: { value: 'login' } })
    fireEvent.change(await screen.findByPlaceholderText(/^Пароль/i), {
      target: { value: 'password' }
    })
    fireEvent.click(await screen.findByText(/Войти/i))

    await waitFor(() => {
      expect(Navigate).toHaveBeenCalledTimes(1)
      expect(Navigate).toHaveBeenCalledWith({ to: '/' }, {})
    })
  })

  it('should has token in localStorage', async () => {
    render(<LoginFeature />, { wrapper: storeRef.wrapper })

    fireEvent.change(screen.getByPlaceholderText(/Логин/i), { target: { value: 'login' } })
    fireEvent.change(await screen.findByPlaceholderText(/^Пароль/i), {
      target: { value: 'password' }
    })
    fireEvent.click(await screen.findByText(/Войти/i))

    await waitFor(() => {
      expect(localStorage.getItem('refresh')).toEqual('refresh')
    })
  })
})
