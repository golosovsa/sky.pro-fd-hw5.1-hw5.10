import ShallowRenderer from 'react-test-renderer/shallow'
import StickyButton from '..'

describe('<StickyButton />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<StickyButton>children</StickyButton>)

      expect(tree).toMatchSnapshot()
    })
  })
})
