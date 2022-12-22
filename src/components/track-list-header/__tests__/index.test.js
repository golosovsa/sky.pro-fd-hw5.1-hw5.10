import ShallowRenderer from 'react-test-renderer/shallow'
import TrackList from '..'

describe('<TrackList />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<TrackList header="header">children</TrackList>)

      expect(tree).toMatchSnapshot()
    })
  })
})
