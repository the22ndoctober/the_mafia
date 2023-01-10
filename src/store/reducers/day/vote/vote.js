import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'
import * as actions from '../../../actions/day/vote/vote'
import enums from '../../../enums'

export const voteSlice = createSlice({
  name: 'vote',
  initialState: {
    values:[],
    didNotVote: [],
    currentCandidature: 'none'

    },
  reducers: {
    activateСandidature: (state, action)=>{
      state.currentCandidature = actions.activateСandidature(state,action.payload)
    },
    getVote: (state,action)=>{
      state.values = actions.getVote(action.payload)
    },
    voteFor: (state,action)=>{

    },
    removeVote: (state, action)=>{
      
    }

    
  }
})

export const {activateСandidature, getVote} = voteSlice.actions

export const selectVote = (state) => state.vote

export default voteSlice.reducer