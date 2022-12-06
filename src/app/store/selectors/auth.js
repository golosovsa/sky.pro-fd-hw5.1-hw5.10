const baseAuthSelector = (store) => store.auth
export const isLoggedInSelector = (store) => baseAuthSelector(store).isLoggedIn
