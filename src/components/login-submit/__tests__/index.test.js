import ShallowRenderer from 'react-test-renderer/shallow'
import LoginSubmit from '..'

const LoginSubmitWrapped = () => {
  return <LoginSubmit value={123} />
}

describe('<LoginSubmit />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<LoginSubmitWrapped />)

      expect(tree).toMatchSnapshot()
    })
  })
})
