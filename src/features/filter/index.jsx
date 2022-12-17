import { useRef, useState } from 'react'
import { useEffect } from 'react'
import { getFilter, storeFilter } from '../../app/filter/storage'
import Filter from '../../components/filter'
import FilterDropdown from '../../components/filter-dropdown'
import RadioList from '../../components/radio-list'
import ShortList from '../../components/short-list'
import StickyButton from '../../components/sticky-button'

export const SORT_ASCENT = 'Более новые'
export const SORT_DESCENT = 'Более старые'

const FilterFeature = ({ data, updateFilter }) => {
  const [authors, setAuthors] = useState([])
  const years = [SORT_ASCENT, SORT_DESCENT]
  const [genres, setGenres] = useState([])
  const [filter, setFilter] = useState(null)
  const [showAuthorsPopup, setShowAuthorsPopup] = useState(false)
  const [showYearsPopup, setShowYearsPopup] = useState(false)
  const [showGenresPopup, setShowGenresPopup] = useState(false)
  const showAuthorsPopupButtonRef = useRef(null)
  const showYearsPopupButtonRef = useRef(null)
  const showGenresPopupButtonRef = useRef(null)
  const authorsPopupRef = useRef(null)
  const yearsPopupRef = useRef(null)
  const genresPopupRef = useRef(null)

  const dispatchClickPopup = (popupRef) => {
    const { current } = popupRef
    if (!current) return
    current.click()
  }

  const isMouseIn = (event, reference) => {
    const { x, y, width, height } = reference.current.getBoundingClientRect()
    const { clientX, clientY } = event

    if (clientX >= x && clientX <= x + width && clientY >= y && clientY <= y + height) {
      return true
    }

    return false
  }

  const handleGlobalClick = (event) => {
    if (
      showYearsPopup &&
      !isMouseIn(event, yearsPopupRef) &&
      !isMouseIn(event, showYearsPopupButtonRef)
    ) {
      dispatchClickPopup(showYearsPopupButtonRef)
    }

    if (
      showGenresPopup &&
      !isMouseIn(event, genresPopupRef) &&
      !isMouseIn(event, showGenresPopupButtonRef)
    ) {
      dispatchClickPopup(showGenresPopupButtonRef)
    }

    if (
      showAuthorsPopup &&
      !isMouseIn(event, authorsPopupRef) &&
      !isMouseIn(event, showAuthorsPopupButtonRef)
    ) {
      dispatchClickPopup(showAuthorsPopupButtonRef)
    }
  }

  useEffect(() => {
    if (!showAuthorsPopup) return
    if (showYearsPopup) dispatchClickPopup(showYearsPopupButtonRef)
    if (showGenresPopup) dispatchClickPopup(showGenresPopupButtonRef)
    window.addEventListener('mouseup', handleGlobalClick, true)
    return () => window.removeEventListener('mouseup', handleGlobalClick, true)
  }, [showAuthorsPopup])

  useEffect(() => {
    if (!showYearsPopup) return
    if (showAuthorsPopup) dispatchClickPopup(showAuthorsPopupButtonRef)
    if (showGenresPopup) dispatchClickPopup(showGenresPopupButtonRef)
    window.addEventListener('mouseup', handleGlobalClick)
    return () => window.removeEventListener('mouseup', handleGlobalClick)
  }, [showYearsPopup])

  useEffect(() => {
    if (!showGenresPopup) return
    if (showAuthorsPopup) dispatchClickPopup(showAuthorsPopupButtonRef)
    if (showYearsPopup) dispatchClickPopup(showYearsPopupButtonRef)
    window.addEventListener('mouseup', handleGlobalClick)
    return () => window.removeEventListener('mouseup', handleGlobalClick)
  }, [showGenresPopup])

  useEffect(() => {
    if (!filter) return
    if (updateFilter) updateFilter(filter)
    const forStoring = {
      authors: filter.authors ? [...filter.authors] : [],
      genres: filter.genres ? [...filter.genres] : [],
      years: filter.years ? filter.years : years[0]
    }
    storeFilter(forStoring)
  }, [filter])

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
    stored.years = stored.years || years[0]
    setFilter(stored)
  }, [])

  const handleOnAuthorItemClick = (author) => {
    const authors = filter.authors

    if (filter.authors.has(author)) {
      authors.delete(author)
      setFilter({ ...filter, authors })
    } else {
      authors.add(author)
      setFilter({ ...filter, authors })
    }
  }

  const handleOnYearsItemClick = (years) => {
    setFilter({ ...filter, years })
  }

  const handleOnGenreItemClick = (genre) => {
    const genres = filter.genres

    if (filter.genres.has(genre)) {
      genres.delete(genre)
      setFilter({ ...filter, genres })
    } else {
      genres.add(genre)
      setFilter({ ...filter, genres })
    }
  }

  return (
    <Filter>
      <FilterDropdown
        isShowPopup={showAuthorsPopup}
        button={
          <StickyButton innerRef={showAuthorsPopupButtonRef} setter={setShowAuthorsPopup}>
            {'исполнителю'}
          </StickyButton>
        }
        tab={filter?.authors?.size > 0 && filter.authors?.size}
        innerPopupRef={authorsPopupRef}>
        <ShortList
          items={authors.map((author) => ({
            value: author,
            selected: filter?.authors?.has(author)
          }))}
          onItemClick={handleOnAuthorItemClick}
        />
      </FilterDropdown>
      <FilterDropdown
        isShowPopup={showYearsPopup}
        button={
          <StickyButton innerRef={showYearsPopupButtonRef} setter={setShowYearsPopup}>
            {'году выпуска'}
          </StickyButton>
        }
        innerPopupRef={yearsPopupRef}>
        <RadioList
          items={years.map((year) => ({ value: year, checked: filter?.years === year }))}
          onItemClick={handleOnYearsItemClick}
        />
      </FilterDropdown>
      <FilterDropdown
        isShowPopup={showGenresPopup}
        button={
          <StickyButton innerRef={showGenresPopupButtonRef} setter={setShowGenresPopup}>
            {'жанру'}
          </StickyButton>
        }
        tab={filter?.genres?.size > 0 && filter.genres?.size}
        innerPopupRef={genresPopupRef}>
        <ShortList
          items={genres.map((genre) => ({ value: genre, selected: filter?.genres?.has(genre) }))}
          onItemClick={handleOnGenreItemClick}
        />
      </FilterDropdown>
    </Filter>
  )
}

export default FilterFeature
