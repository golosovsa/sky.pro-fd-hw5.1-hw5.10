import ShallowRenderer from 'react-test-renderer/shallow'
import Label from '..'

const LabelWrapped = ({ children }) => {
  return <Label>{children}</Label>
}

describe('<Label />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<LabelWrapped>123</LabelWrapped>)

      expect(tree).toMatchSnapshot()
    })
  })
})
