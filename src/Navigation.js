import Burger from './Burger'

function Navigation(props) {
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">{props.logo}</div>
      <div className="nav__burger burger">
        <Burger />
      </div>
      <div className="nav__menu menu">{props.menu}</div>
    </nav>
  )
}

export default Navigation
