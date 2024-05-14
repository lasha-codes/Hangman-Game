import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedIdx: null,
}

const countrySlice = createSlice({
  name: 'countries',
  initialState: initialState,
  reducers: {},
})

export default countrySlice.reducer
