import Label from '../label'
import { FilterButtonsContainer, FilterContainer } from './container'

const Filter = ({ children }) => {
  return (
    <FilterContainer>
      <Label>Искать по:</Label>
      <FilterButtonsContainer>{children}</FilterButtonsContainer>
    </FilterContainer>
  )
}

export default Filter
