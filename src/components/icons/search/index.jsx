import styled from 'styled-components'
import { ReactComponent as SVGSearch } from './search.svg'

export const SearchIcon = styled(SVGSearch)`
  ${(props) => props.theme.applyColors('search-icon')}
  ${(props) => props.theme.applySize(14, 16)}
`
