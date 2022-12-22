import ShallowRenderer from 'react-test-renderer/shallow'
import MainNavigationLink from '..'

const MainNavigationLinkWrapped = ({ children }) => {
  return <MainNavigationLink>{children}</MainNavigationLink>
}

describe('<MainNavigationLink />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<MainNavigationLinkWrapped>children</MainNavigationLinkWrapped>)

      expect(tree).toMatchSnapshot()
    })
  })
})
