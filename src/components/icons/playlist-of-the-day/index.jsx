import styled from 'styled-components'
import { ReactComponent as SVGPlayListOfTheDay } from './playlist-of-the-day.svg'

export const PlayListOfTheDay = styled(SVGPlayListOfTheDay)`
  ${(props) => props.theme.applyColors('aside-item')}
  ${(props) => props.theme.applySize(250, 150)}
`
