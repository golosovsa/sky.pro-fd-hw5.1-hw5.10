import { BrowserRouter } from 'react-router-dom'
import ShallowRenderer from 'react-test-renderer/shallow'
import ProtectedRoute from '..'

describe('<ProtectedRoute />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(
        <BrowserRouter>
          <ProtectedRoute isAllowed={true}>123</ProtectedRoute>
        </BrowserRouter>
      )

      expect(tree).toMatchSnapshot()
    })
  })
})
