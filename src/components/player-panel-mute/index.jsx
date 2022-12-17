import { useEffect, useRef } from 'react'
import { useState } from 'react'
import { PlayerPanelMuteContainer } from './container'
import { PlayerPanelMuteStyled } from './style'

const PlayerPanelMute = ({ loud, setLoud }) => {
  const [mousePressed, setMousePressed] = useState(false)
  const containerRef = useRef(null)
  const muteRef = useRef(null)

  useEffect(() => {
    if (!muteRef || !muteRef.current) return
    muteRef.current.style.width = `${loud}%`
  }, [loud])

  const handleGlobalMouseMove = (event) => {
    const { current: container } = containerRef
    const { x: containerX, width: containerWidth } = container.getBoundingClientRect()
    const { clientX: mouseX } = event

    if (mouseX <= containerX) {
      setLoud(0)
      return
    }

    if (mouseX >= containerX + containerWidth) {
      setLoud(100)
      return
    }

    const relativeX = mouseX - containerX
    setLoud((100 * relativeX) / containerWidth)
  }

  const handleMouseDown = () => setMousePressed(true)
  const handleMouseUp = () => setMousePressed(false)

  useEffect(() => {
    if (mousePressed) {
      window.addEventListener('mousemove', handleGlobalMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      return () => {
        window.removeEventListener('mousemove', handleGlobalMouseMove)
        window.removeEventListener('mousemove', handleMouseUp)
      }
    }
  }, [mousePressed])

  return (
    <PlayerPanelMuteContainer ref={containerRef} onMouseDown={handleMouseDown}>
      <PlayerPanelMuteStyled ref={muteRef} />
    </PlayerPanelMuteContainer>
  )
}

export default PlayerPanelMute
