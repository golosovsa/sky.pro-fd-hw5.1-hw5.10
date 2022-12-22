import { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'

export const AudioStyled = styled.audio`
  display: none;
`

const Audio = ({ src, forwardRef }) => {
  const [error, setError] = useState(false)

  useEffect(() => {
    if (error) throw new Error('audio')
  }, [error])

  return <AudioStyled src={src} ref={forwardRef} onError={() => setError(true)} />
}

export default Audio
