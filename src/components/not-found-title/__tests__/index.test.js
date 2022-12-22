import ShallowRenderer from 'react-test-renderer/shallow'
import NotFoundTitle from '..'

const NotFoundTitleWrapped = ({ children }) => {
  return <NotFoundTitle>{children}</NotFoundTitle>
}

describe('<NotFoundTitle />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<NotFoundTitleWrapped>children</NotFoundTitleWrapped>)

      expect(tree).toMatchSnapshot()
    })
  })
})
