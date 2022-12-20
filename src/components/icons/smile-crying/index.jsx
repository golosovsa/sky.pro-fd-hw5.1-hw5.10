import styled from 'styled-components'
import PNGSmileCrying from './smile_crying.png'

export const SmileCryingIcon = styled.img.attrs({ src: PNGSmileCrying })`
  ${(props) => props.theme.applySize(52, 52)}
`
