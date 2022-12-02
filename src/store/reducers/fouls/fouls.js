import { createSlice } from '@reduxjs/toolkit'

export const foulsSlice = createSlice({
  name: 'fouls',
  initialState: {
    values:[
        0,0,0,0,0,0,0,0,0,0
    ]
    },
  reducers: {
    increment: (state,action) => {
        state.values[action.payload] += 1
    },
    decrement: (state,action) => {
        state.values[action.payload] -= 1
    },
    
  }
})

export const { increment, decrement} = foulsSlice.actions

export const selectCount = (state) => state.fouls.values

export default foulsSlice.reducer