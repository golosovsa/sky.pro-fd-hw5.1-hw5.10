import ShallowRenderer from 'react-test-renderer/shallow'
import TrackListItemIcon from '..'

describe('<TrackListItemIcon />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<TrackListItemIcon />)

      expect(tree).toMatchSnapshot()
    })
  })
})
