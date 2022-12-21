import styled from 'styled-components'
import PNGSmileSad from './smile_sad.png'

export const SmileSadIcon = styled.img.attrs({ src: PNGSmileSad })`
  ${(props) => props.theme.applySize(120, 120)}
`
