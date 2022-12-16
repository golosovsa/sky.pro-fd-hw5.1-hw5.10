import styled from 'styled-components'
import { ReactComponent as SVGHeart } from './heart.svg'

export const HeartIcon = styled(SVGHeart)`
  ${(props) =>
    props.active
      ? props.theme.applyColors('heart-icon-active')
      : props.theme.applyColors('heart-icon')}
  ${(props) => props.theme.applySize(14, 12)}
  transition: color 0.3s linear, fill 0.3s linear;
`
