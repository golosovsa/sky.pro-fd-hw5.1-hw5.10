import { useEffect } from 'react'
import { useRef, useState } from 'react'
import { getPlayerSettings, storePlayerSettings } from '../../app/player/storage'
import {
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
  useGetFavoritesQuery
} from '../../app/services/favorites'
import Audio from '../../components/Audio'
import Icons from '../../components/icons'
import Player from '../../components/player'
import PlayerPanelMute from '../../components/player-panel-mute'
import PlayerProgress from '../../components/player-progress'
import Skeleton from '../../components/skeleton'

const PlayerFeature = ({ track, changeTrack }) => {
  const [progress, setProgress] = useState(0)
  const [loud, setLoud] = useState(undefined)
  const [isCanPlay, setIsCanPlay] = useState(false)
  // const [isCanSetPosition, setIsCanSetPosition] = useState(false)
  const [isStopped, setIsStopped] = useState(false)
  const [isRepeat, setIsRepeat] = useState(undefined)
  const [isShuffle, setIsShuffle] = useState(undefined)
  const { data: favorites } = useGetFavoritesQuery()
  const [addFavorite] = useAddFavoriteMutation()
  const [deleteFavorite] = useDeleteFavoriteMutation()
  const [favoriteSet, setFavoriteSet] = useState(new Set())

  const audioRef = useRef(null)

  const handleOnLikeClick = (item) => {
    const { id } = item
    if (!favoriteSet.has(id)) {
      addFavorite(id)
    }
  }

  const handleOnDislikeClick = (item) => {
    const { id } = item
    if (favoriteSet.has(id)) {
      deleteFavorite(id)
    }
  }

  const handleEnded = () => {
    if (isRepeat) {
      const { current: audio } = audioRef
      audio.currentTime = 0
      audio.play()
      return
    }
    handleChangeTrack('ended')
  }

  const handleChangeTrack = (eventName) => {
    const eventData = {
      eventName,
      isShuffle
    }
    if (changeTrack) changeTrack(eventData)
  }

  const handleCanPlayThough = () => {
    setIsCanPlay(true)
  }

  // const handleLoadedMetaData = () => {
  //   setIsCanSetPosition(true)
  // }

  const handleTimeUpdate = () => {
    const { current: audio } = audioRef
    if (!audio || !audio.duration) return
    const position = (100 * audio.currentTime) / audio.duration
    setProgress(position)
  }

  const handleSetPosition = (position) => {
    const { current: audio } = audioRef
    if (!audio || !audio.duration) return
    audio.currentTime = 0.01 * position * audio.duration
  }

  const handleSetVolume = (volume) => {
    const { current: audio } = audioRef
    audio.volume = 0.01 * volume
  }

  const handleVolumeChange = () => {
    const { current: audio } = audioRef
    setLoud(audio.volume * 100)
  }

  const handlePause = () => {
    const { current: audio } = audioRef
    if (!audio) return
    setIsStopped(audio.paused)
  }

  const handleStop = (status) => {
    if (!isCanPlay) return
    const { current: audio } = audioRef
    if (status) {
      audio.pause()
    } else {
      audio.play()
    }
  }

  useEffect(() => {
    if (!track) return
    const { current: audio } = audioRef
    setProgress(0)
    setIsCanPlay(false)
    handleSetVolume(loud)
    // setIsCanSetPosition(false)
    audio.addEventListener('canplaythrough', handleCanPlayThough)
    // audio.addEventListener('loadedmetadata', handleLoadedMetaData)
    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('volumechange', handleVolumeChange)
    audio.addEventListener('pause', handlePause)
    audio.addEventListener('play', handlePause)
    audio.addEventListener('ended', handleEnded)
    audio.play()
    return () => {
      audio.removeEventListener('canplaythrough', handleCanPlayThough)
      // audio.removeEventListener('loadedmetadata', handleLoadedMetaData)
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('volumechange', handleVolumeChange)
      audio.removeEventListener('pause', handlePause)
      audio.removeEventListener('play', handlePause)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [track])

  const storeSettings = () => {
    storePlayerSettings({
      ...getPlayerSettings(),
      loud,
      isRepeat,
      isShuffle
    })
  }

  useEffect(() => {
    if (loud === undefined) return
    storeSettings()
  }, [loud])
  useEffect(() => {
    if (isRepeat === undefined) return
    storeSettings()
  }, [isRepeat])
  useEffect(() => {
    if (isShuffle === undefined) return
    storeSettings()
  }, [isShuffle])

  useEffect(() => {
    const settings = getPlayerSettings()
    setLoud(settings.loud)
    setIsRepeat(settings.isRepeat)
    setIsShuffle(settings.isShuffle)
  }, [track])

  useEffect(() => {
    if (!favorites) return
    setFavoriteSet(new Set(favorites.map((item) => item.id)))
  }, [favorites])

  const progressComponent = isCanPlay ? (
    <PlayerProgress progress={progress} setProgress={handleSetPosition} />
  ) : (
    <Skeleton height={5} />
  )

  const controlButtons = (
    <>
      <Icons.Prev onClick={() => handleChangeTrack('prev')} />
      {isStopped ? (
        <Icons.Play onClick={() => handleStop(false)} />
      ) : (
        <Icons.Stop onClick={() => handleStop(true)} />
      )}
      <Icons.Next onClick={() => handleChangeTrack('next')} />
      <Icons.Repeat active={isRepeat ? 'true' : undefined} onClick={() => setIsRepeat(!isRepeat)} />
      <Icons.Shuffle
        active={isShuffle ? 'true' : undefined}
        onClick={() => setIsShuffle(!isShuffle)}
      />
    </>
  )
  const likeButtons = (
    <>
      <Icons.Heart
        active={track && favoriteSet && favoriteSet.has(track.id) ? 'true' : undefined}
        onClick={() => handleOnLikeClick(track)}
      />
      <Icons.BrokenHeart
        active={track && favoriteSet && !favoriteSet.has(track.id) ? 'true' : undefined}
        onClick={() => handleOnDislikeClick(track)}
      />
    </>
  )
  const muteControl = (
    <>
      <Icons.Mute />
      <PlayerPanelMute loud={loud} setLoud={handleSetVolume} />
    </>
  )

  return (
    <>
      <Player
        progress={progressComponent}
        controlButtons={controlButtons}
        likeButtons={likeButtons}
        muteControl={muteControl}
        track={track}
      />
      <Audio src={track?.track_file} ref={audioRef} />
    </>
  )
}

export default PlayerFeature
