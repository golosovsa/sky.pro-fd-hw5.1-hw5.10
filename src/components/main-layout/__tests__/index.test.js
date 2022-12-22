import ShallowRenderer from 'react-test-renderer/shallow'
import MainLayout from '..'

describe('<MainLayout />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(
        <MainLayout navigation="navigation" content="content" aside="aside" />
      )

      expect(tree).toMatchSnapshot()
    })
  })
})
