import { ErrorItemStyled } from './style'
import { useState } from 'react'

const ErrorItem = ({ id, error, message, isHidden = false, onHide = undefined }) => {
  const [hidden, setHidden] = useState(isHidden)

  const handleClose = () => {
    setHidden(true)
    if (onHide) {
      onHide(id)
    }
  }

  return (
    <ErrorItemStyled isHidden={hidden} onClick={handleClose}>
      <p>{error}</p>
      <p>{message}</p>
      <p>X</p>
    </ErrorItemStyled>
  )
}

export default ErrorItem
