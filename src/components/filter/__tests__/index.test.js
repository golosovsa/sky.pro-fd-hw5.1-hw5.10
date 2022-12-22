import ShallowRenderer from 'react-test-renderer/shallow'
import Filter from '..'

describe('<Filter />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<Filter>123</Filter>)

      expect(tree).toMatchSnapshot()
    })
  })
})
