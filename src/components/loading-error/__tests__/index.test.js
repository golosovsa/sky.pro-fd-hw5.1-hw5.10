import ShallowRenderer from 'react-test-renderer/shallow'
import LoadingError from '..'

describe('<LoadingError />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<LoadingError />)

      expect(tree).toMatchSnapshot()
    })
  })
})
