import { process } from 'react'
import * as D from './dev'

let settings

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  settings = { ...D }
} else {
  throw 'production settings is not defined'
}

export default settings
