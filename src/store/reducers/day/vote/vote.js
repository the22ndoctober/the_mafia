import { createSlice,current } from '@reduxjs/toolkit'
import * as actions from '../../../actions/day/vote/vote'
import enums from '../../../enums'

export const voteSlice = createSlice({
  name: 'vote',
  initialState: {
    values:{
      onVote:[],
      didNotVote: []
    },    
    currentCandidature: 'none'

    },
  reducers: {
    activateСandidature: (state, action)=>{
      state.currentCandidature = actions.activateСandidature(state,action.payload)
    },
    getVote: (state,action)=>{
      state.values.onVote = actions.getVote(action.payload)
    },
    getVoters: (state,action)=>{
      state.values.didNotVote = actions.getVoters(action.payload)
    },
    voteFor: (state,action)=>{ 
      state.values = actions.voteFor(state, action.payload)
    },
    changeCandidature: (state,action)=>{
      state.currentCandidature = actions.changeCandidature(state.currentCandidature, action.payload)
    }

    
  }
})

export const {activateСandidature,getVoters, getVote, voteFor, changeCandidature} = voteSlice.actions

export const selectVote = (state) => state.vote.values

export const selectCandidature = (state)=> state.vote.currentCandidature

export default voteSlice.reducer