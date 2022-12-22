import ShallowRenderer from 'react-test-renderer/shallow'
import MainNavigation from '..'

describe('<MainNavigation />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<MainNavigation permanent="permanent">children</MainNavigation>)

      expect(tree).toMatchSnapshot()
    })
  })
})
