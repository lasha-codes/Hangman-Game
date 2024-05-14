import { configureStore } from '@reduxjs/toolkit'
import countrySlice from './countrySlice'

const store = configureStore({
  reducer: {
    countries: countrySlice,
  },
})

export default store
