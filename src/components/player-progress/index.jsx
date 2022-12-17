import { useEffect, useRef } from 'react'
import { PlayerProgressContainer } from './container'
import { PlayerProgressStyled } from './style'

const PlayerProgress = ({ progress, setProgress }) => {
  const progressContainerRef = useRef(null)
  const progressRef = useRef(null)

  useEffect(() => {
    if (!progressRef || !progressRef.current) return
    progressRef.current.style.width = `${progress}%`
  }, [progress])

  const handleOnProgressClick = (event) => {
    const { x: containerX, width: containerWidth } =
      progressContainerRef.current.getBoundingClientRect()
    const { clientX: mouseX } = event
    if (mouseX <= containerX) {
      setProgress(0)
      return
    }
    if (mouseX >= containerX + containerWidth) {
      setProgress(100)
      return
    }
    setProgress((100 * (mouseX - containerX)) / containerWidth)
  }

  return (
    <PlayerProgressContainer ref={progressContainerRef} onClick={handleOnProgressClick}>
      <PlayerProgressStyled ref={progressRef} />
    </PlayerProgressContainer>
  )
}

export default PlayerProgress
