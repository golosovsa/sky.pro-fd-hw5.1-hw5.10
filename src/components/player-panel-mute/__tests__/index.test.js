import ShallowRenderer from 'react-test-renderer/shallow'
import PlayerPanelMute from '..'

describe('<PlayerPanelMute />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<PlayerPanelMute loud={50} />)

      expect(tree).toMatchSnapshot()
    })
  })
})
