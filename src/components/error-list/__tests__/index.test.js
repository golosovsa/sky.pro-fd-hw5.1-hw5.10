import ShallowRenderer from 'react-test-renderer/shallow'
import ErrorList from '..'
import ErrorItem from '../../error-item'

describe('<ErrorList />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(
        <ErrorList>
          {[1, 2, 3].map((item) => (
            <ErrorItem key={item} error={item} message={item} />
          ))}
        </ErrorList>
      )

      expect(tree).toMatchSnapshot()
    })
  })
})
