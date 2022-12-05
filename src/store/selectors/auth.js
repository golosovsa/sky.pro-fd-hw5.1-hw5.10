export const authSelector = (store) => store.auth
export const authAccess = (store) => authSelector(store).access
export const authExpired = (store) => authSelector(store).expired
