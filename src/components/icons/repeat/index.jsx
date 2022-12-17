import styled from 'styled-components'
import { ReactComponent as SVGRepeat } from './repeat.svg'

export const RepeatIcon = styled(SVGRepeat)`
  ${(props) =>
    props.active
      ? props.theme.applyColors('repeat-icon-active')
      : props.theme.applyColors('repeat-icon')}
  ${(props) => props.theme.applySize(19, 12)}
  transition: color 0.3s linear, fill 0.3s linear;
`
