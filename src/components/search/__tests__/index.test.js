import ShallowRenderer from 'react-test-renderer/shallow'
import SearchInputStyled from '..'

const SearchInputStyledWrapped = () => {
  return <SearchInputStyled />
}

describe('<SearchInputStyled />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<SearchInputStyledWrapped />)

      expect(tree).toMatchSnapshot()
    })
  })
})
