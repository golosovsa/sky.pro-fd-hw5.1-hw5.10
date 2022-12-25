import { render, screen } from '@testing-library/react'
import ErrorsFeature from '..'
import { useLoginMutation, userApi } from '../../../app/services/user'
import { setupApiStore } from '../../../mocks/test-utils'
import { authErrorsSelector } from '../../../app/store/selectors/auth'
import { hideError } from '../../../app/store/slices/auth'
import { useEffect } from 'react'

const storeRef = setupApiStore(userApi)

const ErrorFeatureWrapped = () => {
  const [signIn, { isError }] = useLoginMutation()

  useEffect(() => {
    signIn({ error: true })
  }, [])
  return (
    <>
      <ErrorsFeature reducer={hideError} selector={authErrorsSelector} />
      isError: {isError.toString()}
    </>
  )
}

describe('error feature', () => {
  it('should be empty', () => {
    render(<ErrorsFeature reducer={hideError} selector={authErrorsSelector} />, {
      wrapper: storeRef.wrapper
    })
    expect(screen.getAllByRole(/.+/i, { hidden: true }).length).toEqual(1)
  })

  it('should be filled', async () => {
    const { debug } = render(<ErrorFeatureWrapped />, {
      wrapper: storeRef.wrapper
    })

    expect(await screen.findByText(/isError: true/i)).not.toBeNull()
    expect(screen.getAllByRole(/.+/i, { hidden: true }).length).toEqual(3)

    debug()
  })
})
