import ShallowRenderer from 'react-test-renderer/shallow'
import TrackListHeader from '..'

describe('<TrackListHeader />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<TrackListHeader />)

      expect(tree).toMatchSnapshot()
    })
  })
})
