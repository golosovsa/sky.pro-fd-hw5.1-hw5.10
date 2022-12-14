import { useState } from 'react'
import { StickyButtonStyled } from './style'

const StickyButton = ({ children, setter, innerRef }) => {
  const [active, setActive] = useState(false)

  const handleOnClick = () => {
    if (setter) setter(!active)
    setActive(!active)
  }

  return (
    <StickyButtonStyled active={active} onClick={handleOnClick} ref={innerRef}>
      {children}
    </StickyButtonStyled>
  )
}

export default StickyButton
