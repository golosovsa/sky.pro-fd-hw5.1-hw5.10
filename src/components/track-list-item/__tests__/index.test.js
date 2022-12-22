import ShallowRenderer from 'react-test-renderer/shallow'
import TrackListItem from '..'

describe('<TrackListItem />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(
        <TrackListItem item={{ name: 'name', author: 'author', album: 'album' }} />
      )

      expect(tree).toMatchSnapshot()
    })

    it('should render successfully and match snapshot is selected', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(
        <TrackListItem selected={true} item={{ name: 'name', author: 'author', album: 'album' }} />
      )

      expect(tree).toMatchSnapshot()
    })

    it('should render successfully and match snapshot is liked', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(
        <TrackListItem liked={true} item={{ name: 'name', author: 'author', album: 'album' }} />
      )

      expect(tree).toMatchSnapshot()
    })
  })
})
