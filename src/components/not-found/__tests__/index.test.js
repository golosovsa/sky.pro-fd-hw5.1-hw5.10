import { BrowserRouter } from 'react-router-dom'
import ShallowRenderer from 'react-test-renderer/shallow'
import NotFoundBlock from '..'

describe('<NotFoundBlock />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const renderer = new ShallowRenderer()
      const tree = renderer.render(
        <BrowserRouter>
          <NotFoundBlock />
        </BrowserRouter>
      )

      expect(tree).toMatchSnapshot()
    })
  })
})
