import styled from 'styled-components'
import { ReactComponent as SVGBrokenHeart } from './broken-heart.svg'

export const BrokenHeartIcon = styled(SVGBrokenHeart)`
  ${(props) =>
    props.active
      ? props.theme.applyColors('broken-heart-icon-active')
      : props.theme.applyColors('broken-heart-icon')}
  ${(props) => props.theme.applySize(14, 12)}
  transition: color 0.3s linear, fill 0.3s linear;
`
