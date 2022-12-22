import ShallowRenderer from 'react-test-renderer/shallow'
import PlayerPanelText from '..'

const PlayerPanelTextWrapped = ({ children }) => {
  return <PlayerPanelText>{children}</PlayerPanelText>
}

describe('<PlayerPanelText />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<PlayerPanelTextWrapped>children</PlayerPanelTextWrapped>)

      expect(tree).toMatchSnapshot()
    })
  })
})
