const baseThemeSelector = (store) => store.theme
export const themeSelector = (store) => baseThemeSelector(store).value
export const isSwitchThemeSelector = (store) => baseThemeSelector(store).isSwitchTheme
