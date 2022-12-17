import Icons from '../../components/icons'
import LinkStyled from '../../components/link'

const LinksFeature = () => {
  return (
    <>
      <LinkStyled to="/">
        <Icons.PlayListOfTheDay />
      </LinkStyled>
      <LinkStyled to="/">
        <Icons.OneHundredDanceHits />
      </LinkStyled>
      <LinkStyled to="/">
        <Icons.IndieCharge />
      </LinkStyled>
    </>
  )
}

export default LinksFeature
