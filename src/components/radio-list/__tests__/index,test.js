import ShallowRenderer from 'react-test-renderer/shallow'
import RadioList from '..'

const mockedItems = [
  {
    value: 'value1',
    checked: true
  },
  {
    value: 'value2',
    checked: true
  },
  {
    value: 'value3',
    checked: true
  }
]

describe('<RadioList />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<RadioList items={mockedItems} />)

      expect(tree).toMatchSnapshot()
    })
  })
})
