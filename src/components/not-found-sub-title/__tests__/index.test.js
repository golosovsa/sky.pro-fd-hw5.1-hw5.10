import ShallowRenderer from 'react-test-renderer/shallow'
import NotFoundSubTitle from '..'

const NotFoundSubTitleWrapped = ({ children }) => {
  return <NotFoundSubTitle>{children}</NotFoundSubTitle>
}

describe('<NotFoundSubTitle />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<NotFoundSubTitleWrapped>children</NotFoundSubTitleWrapped>)

      expect(tree).toMatchSnapshot()
    })
  })
})
