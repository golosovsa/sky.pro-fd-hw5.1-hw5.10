import ShallowRenderer from 'react-test-renderer/shallow'
import Skeleton from '..'

describe('<Skeleton />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<Skeleton />)

      expect(tree).toMatchSnapshot()
    })

    it('should render successfully and match snapshot is full', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<Skeleton full={true} animationOffset={100} />)

      expect(tree).toMatchSnapshot()
    })

    it('should render successfully and match snapshot is width and/or height', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<Skeleton width={200} height={200} />)

      expect(tree).toMatchSnapshot()
    })
  })
})
