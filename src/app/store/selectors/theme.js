const baseThemeSelector = (store) => store.theme
export const themeSelector = (store) => baseThemeSelector(store).value
