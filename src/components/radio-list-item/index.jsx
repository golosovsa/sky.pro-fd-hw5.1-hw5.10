import { RadioMarkerContainer } from './container'
import { RadioItemStyled, RadioMarker } from './style'

const RadioItem = ({ checked, children, onClick }) => {
  return (
    <RadioItemStyled onClick={onClick}>
      <RadioMarkerContainer>{checked && <RadioMarker />}</RadioMarkerContainer>
      {children}
    </RadioItemStyled>
  )
}

export default RadioItem
