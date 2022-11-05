import './style.scss'

import Navigation from './Navigation'
import Main from './Main'
import Logo from './Logo'
import Menu from './Menu'
import Search from './Search'
import Filter from './Filter'

function App() {
  return (
    <div className="container">
      <Main>
        <Navigation logo={Logo()} menu={Menu()} />
        <div className="centerblock__search search">
          <Search placeholder="Поиск" />
        </div>
        <h2 className="centerblock__h2">Треки</h2>
        <div className="centerblock__filter filter">
          <Filter />
        </div>
      </Main>
    </div>
  )
}

export default App
