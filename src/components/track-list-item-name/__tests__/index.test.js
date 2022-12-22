import ShallowRenderer from 'react-test-renderer/shallow'
import TrackListItemName from '..'

describe('<TrackListItemName />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<TrackListItemName name="name" extraName="extra name" />)

      expect(tree).toMatchSnapshot()
    })
  })
})
