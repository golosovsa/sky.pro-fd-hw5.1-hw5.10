import ShallowRenderer from 'react-test-renderer/shallow'
import ShortListItem from '..'

const ShortListItemWrapped = ({ children }) => {
  return <ShortListItem>{children}</ShortListItem>
}

describe('<SearchInputStyled />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<ShortListItemWrapped>children</ShortListItemWrapped>)

      expect(tree).toMatchSnapshot()
    })
  })
})
