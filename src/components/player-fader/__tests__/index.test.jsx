import ShallowRenderer from 'react-test-renderer/shallow'
import PlayerFader from '..'

const PlayerFaderWrapped = () => {
  return <PlayerFader />
}

describe('<PlayerFader />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<PlayerFaderWrapped />)

      expect(tree).toMatchSnapshot()
    })
  })
})
