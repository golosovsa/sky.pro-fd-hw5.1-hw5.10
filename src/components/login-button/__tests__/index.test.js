import ShallowRenderer from 'react-test-renderer/shallow'
import LoginButton from '..'

const LoginButtonWrapped = ({ children }) => {
  return <LoginButton>{children}</LoginButton>
}

describe('<LoginButton />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<LoginButtonWrapped>123</LoginButtonWrapped>)

      expect(tree).toMatchSnapshot()
    })
  })
})
