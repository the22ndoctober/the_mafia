import { createSlice } from '@reduxjs/toolkit'
import * as actions from '../../../actions/day/exhibition/exhibition'

export const exhibitionSlice = createSlice({
  name: 'exhibition',
  initialState: {
    values:[]
    },
  reducers: {
    pullOnVote: (state,action) => {
      state = pullOnVote(state.values, action.payload)
      console.log(state)
    },
    removeFromVote: (state,action)=>{
        state = state.splice(action.payload,1)
    },
    
  }
})

export const {pullOnVote,removeFromVote} = exhibitionSlice.actions

export const selectExhibition = (state) => state.exhibition.values

export default exhibitionSlice.reducer