import { common } from './common'
import { errorPage } from './error-page'
import { loginPage } from './login-page'
import { mainPage } from './main-page'

export default { ...common, ...loginPage, ...mainPage, ...errorPage }
