import { server } from './mocks/server.js'
import { localStorageMocked } from './mocks/loacl-storage.js'

beforeAll(() => {
  server.listen()
})

beforeEach(() => {
  localStorageMocked.clear()
})

afterEach(() => server.resetHandlers())

afterAll(() => server.close())
