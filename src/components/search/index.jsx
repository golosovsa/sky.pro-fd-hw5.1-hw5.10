import { useEffect } from 'react'
import { useState } from 'react'
import Icons from '../icons'
import { SearchContainer } from './container'
import { SearchInputStyled } from './style'

const SearchInput = ({ updateSearch }) => {
  const [value, setValue] = useState('')

  const handleOnChange = (e) => setValue(e.target.value)

  useEffect(() => {
    if (updateSearch) updateSearch(value)
  }, [value])

  return (
    <SearchContainer>
      <Icons.Search />
      <SearchInputStyled placeholder="Поиск" onChange={handleOnChange} value={value} />
    </SearchContainer>
  )
}

export default SearchInput
