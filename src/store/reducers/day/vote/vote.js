import { createSlice } from '@reduxjs/toolkit'
import * as actions from '../../../actions/day/vote/vote'
import enums from '../../../enums'

export const voteSlice = createSlice({
  name: 'vote',
  initialState: {
    values:[],
    didNotVote: [],
    currentCandidature: 2

    },
  reducers: {
    activateСandidature: (state, action)=>{
      state.currentCandidature = actions.activateСandidature(state,action.payload)
    },
    getVote: (state,action)=>{
      state.values = actions.getVote(action.payload)
    },
    getVoters: (state,action)=>{
      state.didNotVote = actions.getVoters(action.payload)
    },
    voteFor: (state,action)=>{
      state = actions.voteFor(state, action.payload)
    },
    removeVote: (state, action)=>{
      
    }

    
  }
})

export const {activateСandidature,getVoters, getVote, voteFor} = voteSlice.actions

export const selectVote = (state) => state.vote

export default voteSlice.reducer