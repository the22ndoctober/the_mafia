import { createSlice } from '@reduxjs/toolkit'
import * as actions from '../../../actions/day/exhibition/exhibition'

export const exhibitionSlice = createSlice({
  name: 'exhibition',
  initialState: {
    values: []
    },
  reducers: {
    pullOnVote: (state,action) => {
      state.values = actions.pullOnVote(state.values, action.payload)
    },
    removeFromVote: (state,action)=>{
        console.log(state.values[0].pull)
    },
    
  }
})

export const {pullOnVote,removeFromVote} = exhibitionSlice.actions

export const selectExhibition = (state) => state.exhibition.values

export default exhibitionSlice.reducer