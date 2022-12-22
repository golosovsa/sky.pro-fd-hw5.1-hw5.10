import ShallowRenderer from 'react-test-renderer/shallow'
import TrackListItemTime from '..'

const TrackListItemTimeWrapped = ({ children }) => {
  return <TrackListItemTime>{children}</TrackListItemTime>
}

describe('<TrackListItemAuthor />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<TrackListItemTimeWrapped>children</TrackListItemTimeWrapped>)

      expect(tree).toMatchSnapshot()
    })
  })
})
