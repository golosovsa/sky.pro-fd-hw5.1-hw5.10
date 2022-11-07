import './style.scss'
import tracks from './tracks'

import Navigation from './Navigation'
import Main from './Main'
import Logo from './Logo'
import Menu from './Menu'
import Search from './Search'
import Filter from './Filter'
import PlaylistTitle from './PlaylistTitle'
import PlaylistItem from './PlaylistItem'
import Personal from './Personal'
import Sidebar from './Sidebar'
import SidebarItem from './SidebarItem'
import Bar from './Bar'
import Footer from './Footer'

function App() {
  const emptyAction = (action, id) => {
    console.log(action, id)
  }
  const tracksElements = tracks.map((track, index) => (
    <PlaylistItem
      // eslint-disable-next-line react/no-array-index-key
      key={index}
      id={index}
      title={track.title}
      titleSpan={track.titleSpan ? track.titleSpan : ''}
      author={track.author}
      album={track.album}
      time={track.time}
      action={emptyAction}
    />
  ))

  return (
    <div className="container">
      <Main>
        <Navigation logo={Logo()} menu={Menu()} />
        <div className="main__centerblock centerblock">
          <div className="centerblock__search search">
            <Search placeholder="Поиск" />
          </div>
          <h2 className="centerblock__h2">Треки</h2>
          <div className="centerblock__filter filter">
            <Filter />
          </div>
          <div className="centerblock__content">
            <div className="content__title playlist-title">
              <PlaylistTitle />
            </div>
            <div className="content__playlist playlist">{tracksElements}</div>
          </div>
        </div>
        <div className="main__centerblock centerblock">
          <Personal name="Sergey.Ivanov" avatar="" />
          <Sidebar>
            <SidebarItem
              img="img/playlist01.png"
              alt="day's playlist"
              action="#"
            />
            <SidebarItem
              img="img/playlist02.png"
              alt="100 dance hits"
              action="#"
            />
            <SidebarItem
              img="img/playlist03.png"
              alt="indie charge"
              action="#"
            />
          </Sidebar>
        </div>
      </Main>
      <Bar author="Ты та..." album="Баста" action={emptyAction} />
      <Footer/>
    </div>
  )
}

export default App
