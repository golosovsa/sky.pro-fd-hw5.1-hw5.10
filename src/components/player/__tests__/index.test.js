import ShallowRenderer from 'react-test-renderer/shallow'
import Player from '..'

describe('<Player />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot if track undefined', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<Player />)

      expect(tree).toMatchSnapshot()
    })

    it('should render successfully and match snapshot if track defined', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(
        <Player
          progress="progress"
          controlButtons="control buttons"
          likeButtons="like buttons"
          muteControl="mute control"
          track={{ name: 'name', author: 'author' }}
        />
      )

      expect(tree).toMatchSnapshot()
    })
  })
})
