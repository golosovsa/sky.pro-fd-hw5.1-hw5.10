import { useState } from 'react'
import Icons from '../../components/icons'
import MainLayout from '../../components/main-layout'
import NotFoundBlock from '../../components/not-found'
import Player from '../../components/player'
import PlayerPanelMute from '../../components/player-panel-mute'
import SearchInput from '../../components/search'
import Skeleton from '../../components/skeleton'
import NavigationFeature from '../../features/navigation'

const NotFound = () => {
  const [mute, setMute] = useState(50)
  const navigation = <NavigationFeature />
  const content = (
    <>
      <SearchInput />
      <NotFoundBlock />
    </>
  )
  const aside = undefined

  const muteControl = (
    <>
      <Icons.Mute />
      <PlayerPanelMute loud={mute} setLoud={setMute} />
    </>
  )

  const progress = <Skeleton height={5} />

  const track = {
    name: <Skeleton width={350} height={18} animationOffset={357} />,
    author: <Skeleton width={350} height={18} animationOffset={357} />
  }

  const controlButtons = (
    <>
      <Icons.Prev />
      <Icons.Play />
      <Icons.Next />
      <Icons.Repeat />
      <Icons.Shuffle />
    </>
  )

  const likeButtons = (
    <>
      <Icons.Heart />
      <Icons.BrokenHeart />
    </>
  )

  return (
    <>
      <MainLayout navigation={navigation} content={content} aside={aside} />
      <Player
        progress={progress}
        muteControl={muteControl}
        track={track}
        likeButtons={likeButtons}
        controlButtons={controlButtons}
      />
    </>
  )
}

export default NotFound
