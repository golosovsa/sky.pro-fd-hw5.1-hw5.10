import styled from 'styled-components'
import { ReactComponent as SVGShuffle } from './shuffle.svg'

export const ShuffleIcon = styled(SVGShuffle)`
  ${(props) =>
    props.active
      ? props.theme.applyColors('shuffle-icon-active')
      : props.theme.applyColors('shuffle-icon')}
  ${(props) => props.theme.applySize(19, 12)}
`
