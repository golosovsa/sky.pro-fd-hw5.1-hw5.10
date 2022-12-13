import { RadioMarkerContainer } from './container'
import { RadioItemStyled, RadioMarker } from './style'

const RadioItem = ({ checked, children }) => {
  return (
    <RadioItemStyled>
      <RadioMarkerContainer>{checked && <RadioMarker />}</RadioMarkerContainer>
      {children}
    </RadioItemStyled>
  )
}

export default RadioItem
