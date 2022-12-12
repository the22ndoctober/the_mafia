import { createSlice } from '@reduxjs/toolkit'
import * as actions from '../../../actions/day/exhibition/exhibition'

export const exhibitionSlice = createSlice({
  name: 'exhibition',
  initialState: {
    values: [{pull: 3, exposed: 4}, {pull:1, exposed: 5}]
    },
  reducers: {
    pullOnVote: (state,action) => {
      state.values[0] = actions.pullOnVote(state.values, action.payload)
      console.log(state.values.toString())
    },
    removeFromVote: (state,action)=>{
        console.log(state.values[0].pull)
    },
    
  }
})

export const {pullOnVote,removeFromVote} = exhibitionSlice.actions

export const selectExhibition = (state) => state.exhibition.values

export default exhibitionSlice.reducer