import ShallowRenderer from 'react-test-renderer/shallow'
import LoginForm from '..'

describe('<LoginForm />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<LoginForm />)

      expect(tree).toMatchSnapshot()
    })

    it('should render inputs and buttons and disabled successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<LoginForm inputs={123} buttons={123} disabled={true} />)

      expect(tree).toMatchSnapshot()
    })
  })
})
