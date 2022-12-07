import { createSlice } from '@reduxjs/toolkit'
import * as actions from '../../../actions/day/vote/vote'
import enums from '../../../enums'

export const voteSlice = createSlice({
  name: 'vote',
  initialState: {
    values:[
        {}
    ]
    },
  reducers: {
    pullOnVote: (state,action) => {
      
    },
    vote: (state,action) =>{

    },
    beExpoused: (state,action) =>{

    },
    beVoted: (state,action) => {

    }
    
  }
})

export const {pullOnVote, vote} = voteSlice.actions

export const selectVote = (state) => state.vote.values

export default voteSlice.reducer