import { render, screen } from '@testing-library/react'
import Audio from '..'

describe('<Audio />', () => {
  describe('Snapshot test', () => {
    it('should render successfully and match snapshot', () => {
      const { container } = render(<Audio />)

      expect(container).toMatchSnapshot()
    })
  })

  describe('style test', () => {
    it('should have display: none', () => {
      render(<Audio />)

      expect(screen.getByRole('Audio', { hidden: true }))
    })
  })
})
