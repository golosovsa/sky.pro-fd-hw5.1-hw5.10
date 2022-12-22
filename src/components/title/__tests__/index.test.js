import ShallowRenderer from 'react-test-renderer/shallow'
import Title from '..'

const TitleWrapped = ({ children }) => {
  return <Title>{children}</Title>
}

describe('<Title />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<TitleWrapped>children</TitleWrapped>)

      expect(tree).toMatchSnapshot()
    })
  })
})
