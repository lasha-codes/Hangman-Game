import { createSlice } from '@reduxjs/toolkit'
import { countries } from './countries'

interface initialTypes {
  selectedIdx: null | number
  selectedCountry: string[]
}

const randomIndex = Math.floor(Math.random() * countries.length)

const initialState: initialTypes = {
  selectedIdx: null,
  selectedCountry: countries[randomIndex].toLowerCase().split(''),
}

const countrySlice = createSlice({
  name: 'countries',
  initialState: initialState,
  reducers: {
    getRandomWord: (state, { payload }) => {
      state.selectedCountry = payload.toLowerCase().split('')
    },
    selectIdx: (state, { payload }) => {
      state.selectedIdx = payload
    },
  },
})

export default countrySlice.reducer

export const { getRandomWord, selectIdx } = countrySlice.actions
