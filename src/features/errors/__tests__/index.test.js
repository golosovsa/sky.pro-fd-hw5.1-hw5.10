import { render, screen, waitFor } from '@testing-library/react'
import ErrorsFeature from '..'
import { useLoginMutation, userApi } from '../../../app/services/user'
import { setupApiStore } from '../../../mocks/test-utils'
import { authErrorsSelector } from '../../../app/store/selectors/auth'
import { hideError } from '../../../app/store/slices/auth'
import { server } from '../../../mocks/server'
import { rest } from 'msw'
import { BACKEND } from '../../../app/settings'
import { useEffect } from 'react'

const storeRef = setupApiStore(userApi)

const ErrorFeatureWrapped = () => {
  const [signIn] = useLoginMutation()

  useEffect(() => {
    signIn({})
  }, [])
  return <ErrorsFeature reducer={hideError} selector={authErrorsSelector} />
}

describe('error feature', () => {
  it('should be empty', () => {
    render(<ErrorsFeature reducer={hideError} selector={authErrorsSelector} />, {
      wrapper: storeRef.wrapper
    })
    expect(screen.getAllByRole(/.+/i, { hidden: true }).length).toEqual(1)
  })

  it('should be filled', async () => {
    server.use(
      rest.post(`${BACKEND}user/login/`, (req, res, ctx) => {
        return res.once(
          ctx.status(401),
          ctx.json({ detail: 'Пользователь с таким email или паролем не найден' })
        )
      })
    )
    const { rerender, debug } = render(<ErrorFeatureWrapped />, {
      wrapper: storeRef.wrapper
    })

    await waitFor(() => {})

    rerender(<ErrorFeatureWrapped />)
    console.log(storeRef.store.dispatch)

    await waitFor(async () => {
      // console.log(screen.getAllByRole(/.*/i, { hidden: true }))
      debug()
    })
  })
})
