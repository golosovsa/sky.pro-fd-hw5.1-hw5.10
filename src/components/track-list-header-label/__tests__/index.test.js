import ShallowRenderer from 'react-test-renderer/shallow'
import TrackListHeaderLabel from '..'

const TrackListHeaderLabelWrapped = ({ children }) => {
  return <TrackListHeaderLabel>{children}</TrackListHeaderLabel>
}

describe('<TrackListHeaderLabel />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(
        <TrackListHeaderLabelWrapped>children</TrackListHeaderLabelWrapped>
      )

      expect(tree).toMatchSnapshot()
    })
  })
})
