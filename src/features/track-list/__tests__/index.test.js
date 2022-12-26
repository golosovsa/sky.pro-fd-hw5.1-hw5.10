import { render, screen } from '@testing-library/react'
import { useState } from 'react'
import TrackListFeature from '..'
import { favoritesApi } from '../../../app/services/favorites'
import { tracksApi, useGetTracksQuery } from '../../../app/services/tracks'
import { setupApiStore } from '../../../mocks/test-utils'
import 'jest-styled-components'
import { SkeletonStyled } from '../../../components/skeleton/style'

const storeRef = setupApiStore([tracksApi, favoritesApi])

const TrackListFeatureWrapped = () => {
  const { data, isLoading, isSuccess } = useGetTracksQuery()
  const [selected, setSelected] = useState(null)
  return (
    <>
      <TrackListFeature
        data={data}
        isFetching={isLoading}
        selectedTrack={selected}
        onSelectTrack={setSelected}
      />
      {selected && <p>selected: {JSON.stringify(selected)}</p>}
      {isSuccess && <p>success: true</p>}
    </>
  )
}

describe('track list feature', () => {
  it('should be sceleton while first fetching', async () => {
    const { container } = render(<TrackListFeatureWrapped />, { wrapper: storeRef.wrapper })
    const skeletonClassId = (<SkeletonStyled />).type.styledComponentId
    expect(container.getElementsByClassName(skeletonClassId).length).toBeGreaterThan(0)
    expect(await screen.findAllByText(/success: true/i)).not.toBeNull()
    expect(container.getElementsByClassName(skeletonClassId).length).toEqual(0)
  })
})
