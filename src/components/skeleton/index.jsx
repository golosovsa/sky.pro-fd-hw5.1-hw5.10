import { SkeletonStyled } from './style'

const shineDuration = '3s'

const Skeleton = ({ full = false, width, height, animationOffset = 0 }) => {
  return (
    <SkeletonStyled
      full={full ? 'true' : undefined}
      fill={!full ? 'true' : undefined}
      height={height}
      width={width}
      animationOffset={animationOffset}
      shineDuration={shineDuration}
    />
  )
}

export default Skeleton
