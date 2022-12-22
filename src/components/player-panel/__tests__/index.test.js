import ShallowRenderer from 'react-test-renderer/shallow'
import PlayerPanel from '..'

describe('<PlayerPanel />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(
        <PlayerPanel
          buttons="buttons"
          likeButtons="like buttons"
          name="name"
          author="author"
          muteControl="mute control"
        />
      )

      expect(tree).toMatchSnapshot()
    })
  })
})
