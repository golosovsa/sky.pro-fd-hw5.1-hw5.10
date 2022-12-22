import ShallowRenderer from 'react-test-renderer/shallow'
import FilterDropdown from '..'

describe('<FilterDropdown />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<FilterDropdown>123</FilterDropdown>)

      expect(tree).toMatchSnapshot()
    })
  })

  describe('Snapshot test with tab and button', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(
        <FilterDropdown button={123} tab={123} isShowPopup={true}>
          123
        </FilterDropdown>
      )

      expect(tree).toMatchSnapshot()
    })
  })
})
