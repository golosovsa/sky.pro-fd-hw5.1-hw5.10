import ShallowRenderer from 'react-test-renderer/shallow'
import RadioItem from '..'

describe('<RadioList />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<RadioItem checked={false}>children</RadioItem>)

      expect(tree).toMatchSnapshot()
    })

    it('should render successfully and match snapshot is checked', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<RadioItem checked={true}>children</RadioItem>)

      expect(tree).toMatchSnapshot()
    })
  })
})
