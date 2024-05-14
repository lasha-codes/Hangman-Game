import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedIdx: null,
  selectedCountry: [],
}

const countrySlice = createSlice({
  name: 'countries',
  initialState: initialState,
  reducers: {
    getRandomWord: (state, { payload }) => {
      state.selectedCountry = payload.split('')
      console.log(state.selectedCountry)
    },
  },
})

export default countrySlice.reducer

export const { getRandomWord } = countrySlice.actions
