import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query'
import { useSelector } from 'react-redux'
import { authAccess, authExpired } from '../store/selectors/auth'

export const fetchProtectedQueryOrLogOut = async (args, api, extraOptions) => {}
