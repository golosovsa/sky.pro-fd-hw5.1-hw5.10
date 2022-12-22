import ShallowRenderer from 'react-test-renderer/shallow'
import TrackListItemSkeleton from '..'

describe('<TrackListItemSkeleton />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<TrackListItemSkeleton />)

      expect(tree).toMatchSnapshot()
    })
  })
})
