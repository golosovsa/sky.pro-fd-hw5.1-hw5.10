import ShallowRenderer from 'react-test-renderer/shallow'
import PlayerProgress from '..'

describe('<PlayerProgress />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<PlayerProgress progress={50} />)

      expect(tree).toMatchSnapshot()
    })
  })
})
