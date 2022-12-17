import { SkeletonStyled } from './style'

const shineDuration = '3s'

const Skeleton = ({ full = false, animationOffset = 0 }) => {
  return (
    <SkeletonStyled
      full={full ? 'true' : undefined}
      fill={!full ? 'true' : undefined}
      animationOffset={animationOffset}
      shineDuration={shineDuration}
    />
  )
}

export default Skeleton
