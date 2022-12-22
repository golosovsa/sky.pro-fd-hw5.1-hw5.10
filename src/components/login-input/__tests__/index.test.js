import ShallowRenderer from 'react-test-renderer/shallow'
import LoginInput from '..'

const LoginInputWrapped = () => {
  return <LoginInput value={123} placeholder={123} />
}

describe('<LoginInput />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<LoginInputWrapped />)

      expect(tree).toMatchSnapshot()
    })
  })
})
