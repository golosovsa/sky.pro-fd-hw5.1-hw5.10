const PLAYER_ITEM_NAME = 'player'
const initialSettings = {
  loud: 100,
  isRepeat: true,
  isShuffle: true
}

export const getPlayerSettings = () => {
  const settings = localStorage.getItem(PLAYER_ITEM_NAME)
  return settings ? JSON.parse(settings) : initialSettings
}

export const storePlayerSettings = (settings) => {
  localStorage.setItem(PLAYER_ITEM_NAME, JSON.stringify(settings))
}
