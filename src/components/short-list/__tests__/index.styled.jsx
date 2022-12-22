import ShallowRenderer from 'react-test-renderer/shallow'
import ShortList from '..'

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

describe('<ShortList />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(<ShortList items={mockedItems} />)

      expect(tree).toMatchSnapshot()
    })
  })
})
