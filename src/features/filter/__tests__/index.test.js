import { fireEvent, render, screen } from '@testing-library/react'
import { useState } from 'react'
import FilterFeature, { SORT_ASCENT, SORT_DESCENT } from '..'
import { userApi } from '../../../app/services/user'
import { setupApiStore } from '../../../mocks/test-utils'
import TRACKS from '../../../mocks/tracks'

const storeRef = setupApiStore(userApi)

const FilterFeatureWrapped = ({ data }) => {
  const [filter, updateFilter] = useState(null)
  return (
    <>
      <FilterFeature data={data} updateFilter={updateFilter} />
      {filter && (
        <>
          <p>filter</p>
          <p>
            {JSON.stringify({
              ...filter,
              authors: [...filter.authors],
              genres: [...filter.genres]
            })}
          </p>
        </>
      )}
    </>
  )
}

describe('filter feature', () => {
  it('should be initial filter', async () => {
    const expected = `{"authors":[],"genres":[],"years":"${SORT_ASCENT}"}`
    render(<FilterFeatureWrapped data={TRACKS} />, { wrapper: storeRef.wrapper })
    expect(await screen.findByText(expected)).not.toBeNull()
    expect(localStorage.getItem('filter')).toEqual(expected)
  })

  it('should be filled and closed', async () => {
    const expected = `{"authors":["AFM"],"genres":["Классическая музыка"],"years":"${SORT_DESCENT}"}`
    render(<FilterFeatureWrapped data={TRACKS} />, { wrapper: storeRef.wrapper })
    fireEvent.click(await screen.findByText(/исполнителю/i))
    fireEvent.click(await screen.findByText(/AFM/i))
    fireEvent.click(await screen.findByText(/жанру/i))
    fireEvent.click(await screen.findByText(/Классическая музыка/i))
    fireEvent.click(await screen.findByText(/году выпуска/i))
    fireEvent.click(await screen.findByText(SORT_DESCENT))
    fireEvent.click(await screen.findByText(/Искать по:/i))
    expect(await screen.findByText(expected)).not.toBeNull()
    expect(localStorage.getItem('filter')).toEqual(expected)
    expect(screen.getByText('исполнителю').nextSibling).not.toBeVisible()
    expect(screen.getByText('исполнителю').nextSibling.nextSibling).toBeVisible() // tab
    expect(screen.getByText('жанру').nextSibling).not.toBeVisible()
    expect(screen.getByText('жанру').nextSibling.nextSibling).toBeVisible() // tab
    expect(screen.getByText('году выпуска').nextSibling).not.toBeVisible()
  })
})
