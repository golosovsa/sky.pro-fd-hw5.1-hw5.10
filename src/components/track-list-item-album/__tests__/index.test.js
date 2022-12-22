import ShallowRenderer from 'react-test-renderer/shallow'
import TrackListItemAlbum from '..'

const TrackListItemAlbumWrapped = ({ children }) => {
  return <TrackListItemAlbum>{children}</TrackListItemAlbum>
}

describe('<TrackListItemAlbum />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<TrackListItemAlbumWrapped>children</TrackListItemAlbumWrapped>)

      expect(tree).toMatchSnapshot()
    })
  })
})
