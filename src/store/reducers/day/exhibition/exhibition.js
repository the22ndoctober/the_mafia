import { createSlice, current } from '@reduxjs/toolkit'
import * as actions from '../../../actions/day/exhibition/exhibition'

export const exhibitionSlice = createSlice({
  name: 'exhibition',
  initialState: {
    values: [],
    active: 'none'
    },
  reducers: {
    makeActive: (state,action) =>{
      state.active = actions.makeActive(state.active, action.payload)
    },
    pullOnVote: (state,action) => {
      state.values = actions.pullOnVote(state.values, action.payload, state.active)
    },

    removeFromVote: (state,action)=>{
       state.values = actions.removeFromVote(state.values, action.payload)
    },
    showState: (state, action) =>{
      console.log(current(state))
    }
    
  }
})

export const {makeActive, pullOnVote,removeFromVote,showState} = exhibitionSlice.actions

export const selectExhibition = (state) => state.exhibition.values
export const selectActive = (state) => state.exhibition.active

export default exhibitionSlice.reducer