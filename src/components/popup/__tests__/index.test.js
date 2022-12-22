import ShallowRenderer from 'react-test-renderer/shallow'
import Popup from '..'

const PopupWrapped = ({ children }) => {
  return <Popup>{children}</Popup>
}

describe('<Popup />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<PopupWrapped>children</PopupWrapped>)

      expect(tree).toMatchSnapshot()
    })
  })
})
