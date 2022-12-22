import ShallowRenderer from 'react-test-renderer/shallow'
import TrackListItemAuthor from '..'

const TrackListItemAuthorWrapped = ({ children }) => {
  return <TrackListItemAuthor>{children}</TrackListItemAuthor>
}

describe('<TrackListItemAuthor />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(
        <TrackListItemAuthorWrapped>children</TrackListItemAuthorWrapped>
      )

      expect(tree).toMatchSnapshot()
    })
  })
})
