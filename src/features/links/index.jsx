import Icons from '../../components/icons'
import LinkStyled from '../../components/link'
import Skeleton from '../../components/skeleton'

const LinksFeature = ({ isFetching }) => {
  if (isFetching) {
    return (
      <>
        <Skeleton width={250} height={150} animationOffset={1580} />
        <Skeleton width={250} height={150} animationOffset={1580} />
        <Skeleton width={250} height={150} animationOffset={1580} />
      </>
    )
  }

  return (
    <>
      <LinkStyled to="/collection/1">
        <Icons.PlayListOfTheDay />
      </LinkStyled>
      <LinkStyled to="/collection/2">
        <Icons.OneHundredDanceHits />
      </LinkStyled>
      <LinkStyled to="/collection/3">
        <Icons.IndieCharge />
      </LinkStyled>
    </>
  )
}

export default LinksFeature
