import { createSlice } from '@reduxjs/toolkit'

interface initialTypes {
  selectedIdx: null | number
  selectedCountry: string[]
}

const initialState: initialTypes = {
  selectedIdx: null,
  selectedCountry: [],
}

const countrySlice = createSlice({
  name: 'countries',
  initialState: initialState,
  reducers: {
    getRandomWord: (state, { payload }) => {
      state.selectedCountry = payload.split('')
    },
    selectIdx: (state, { payload }) => {
      state.selectedIdx = payload
    },
  },
})

export default countrySlice.reducer

export const { getRandomWord, selectIdx } = countrySlice.actions
