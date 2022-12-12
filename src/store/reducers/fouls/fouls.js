import { createSlice } from '@reduxjs/toolkit'
import * as actions from '../../actions/fouls/fouls'

export const foulsSlice = createSlice({
  name: 'fouls',
  initialState: {
    values:[
        0,0,0,0,0,0,0,0,0,0
    ]
    },
  reducers: {
    increment: (state,action) => {
      state.values[action.payload] = actions.increment(state.values[action.payload])
      console.log(state.values)
    },
    decrement: (state,action) => {
      state.values[action.payload] = actions.decrement(state.values[action.payload])
    },
    
  }
})

export const { increment, decrement} = foulsSlice.actions

export const selectCount = (state) => state.fouls.values

export default foulsSlice.reducer