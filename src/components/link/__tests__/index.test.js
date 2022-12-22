import ShallowRenderer from 'react-test-renderer/shallow'
import Link from '..'

const LabelWrapped = ({ children }) => {
  return <Link>{children}</Link>
}

describe('<Link />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<LabelWrapped>123</LabelWrapped>)

      expect(tree).toMatchSnapshot()
    })
  })
})
