import ShallowRenderer from 'react-test-renderer/shallow'
import Tab from '..'

const TabWrapped = ({ children }) => {
  return <Tab>{children}</Tab>
}

describe('<Tab />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<TabWrapped>children</TabWrapped>)

      expect(tree).toMatchSnapshot()
    })
  })
})
