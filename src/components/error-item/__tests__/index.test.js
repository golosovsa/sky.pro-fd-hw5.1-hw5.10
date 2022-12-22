import ShallowRenderer from 'react-test-renderer/shallow'
import ErrorItem from '..'

describe('<ErrorItem />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<ErrorItem />)

      expect(tree).toMatchSnapshot()
    })
  })
})
