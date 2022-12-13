import { useState } from 'react'
import { useEffect } from 'react'
import { getFilter, storeFilter } from '../../app/filter/storage'
import Filter from '../../components/filter'
import FilterDropdown from '../../components/filter-dropdown'
import RadioList from '../../components/radio-list'
import ShortList from '../../components/short-list'

const FilterFeature = ({ data }) => {
  const [authors, setAuthors] = useState([])
  const years = ['Более новые', 'Более старые']
  const [genres, setGenres] = useState([])

  const [filter, setFilter] = useState({})

  useEffect(() => console.log('authors', authors), [authors])
  useEffect(() => console.log('genres', genres), [genres])
  useEffect(() => console.log('years', years), [years])

  useEffect(() => {}, [filter])

  useEffect(() => {
    if (!data) return
    let autorsSet = new Set()
    let genresSet = new Set()
    data.forEach((item) => {
      const { author, genre } = item
      if (author && author !== '-') autorsSet.add(author)
      if (genre && genre !== '-') genresSet.add(genre)
    })
    setAuthors([...autorsSet].sort())
    setGenres([...genresSet].sort())
  }, [data])

  useEffect(() => {
    const stored = getFilter()
    stored.authors = new Set(stored.authors || [])
    stored.genres = new Set(stored.genres || [])
    stored.years = Number(stored.years || 0)
    setFilter(stored)
    return () => {
      const forStoring = { ...filter, authors: [...filter.authors], genres: [...filter.genres] }
      storeFilter(forStoring)
    }
  }, [])

  return (
    <Filter>
      <FilterDropdown name="исполнителю">
        <ShortList items={authors.map((author) => ({ value: author }))} />
      </FilterDropdown>
      <FilterDropdown name="году выпуска">
        <RadioList items={years.map((year) => ({ value: year }))} />
      </FilterDropdown>
      <FilterDropdown name="жанру">
        <ShortList items={genres.map((genre) => ({ value: genre }))} />
      </FilterDropdown>
    </Filter>
  )
}

export default FilterFeature
