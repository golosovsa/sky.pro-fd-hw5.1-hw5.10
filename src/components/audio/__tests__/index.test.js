import Audio from '..'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
// import { renderHook } from '@testing-library/react'

describe('<Audio />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const tree = renderer.create(<Audio />)

      expect(tree).toMatchSnapshot()
    })
  })

  // describe('Exception test', () => {
  //   it('should have exception', () => {
  //     let error = ''
  //     const expectedError = 'audio'
  //     try {
  //       renderHook(() => <Audio src="non-exists" />)
  //     } catch (exception) {
  //       error = exception
  //     }
  //     expect(error).toEqual(expectedError)
  //   })
  // })
})
