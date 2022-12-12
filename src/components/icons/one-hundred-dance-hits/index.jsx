import styled from 'styled-components'
import { ReactComponent as SVGOneHundredDanceHits } from './one-hundred-dance-hits.svg'

export const OneHundredDanceHits = styled(SVGOneHundredDanceHits)`
  ${(props) => props.theme.applyColors('aside-item')}
  ${(props) => props.theme.applySize(250, 150)}
`
