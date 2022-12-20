import styled from 'styled-components'

const AudioStyled = styled.audio`
  display: none;
`

const Audio = ({ src, forwardRef }) => {
  const handleError = () => {
    throw new Error('loading error')
  }

  return <AudioStyled src={src} ref={forwardRef} onError={handleError} />
}

export default Audio
