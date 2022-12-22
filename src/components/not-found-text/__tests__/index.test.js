import ShallowRenderer from 'react-test-renderer/shallow'
import NotFoundText from '..'

const NotFoundTextWrapped = ({ children }) => {
  return <NotFoundText>{children}</NotFoundText>
}

describe('<NotFoundText />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<NotFoundTextWrapped>children</NotFoundTextWrapped>)

      expect(tree).toMatchSnapshot()
    })
  })
})
