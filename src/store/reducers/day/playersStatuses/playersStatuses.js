import { createSlice } from '@reduxjs/toolkit'
import enums from '../../../enums'
import * as actions from '../../../actions/day/playersStatuses/playersStatuses'

export const playersStatusesSlice = createSlice({
  name: 'playersStatuses',
  initialState: {
    values: [
        enums.playerStatuses.voted,
        enums.playerStatuses.alive,
        enums.playerStatuses.voted,
        enums.playerStatuses.alive,
        enums.playerStatuses.alive,
        enums.playerStatuses.killed,
        enums.playerStatuses.killed,
        enums.playerStatuses.deleted,
        enums.playerStatuses.killed,
        enums.playerStatuses.killed
    ]
    },
  reducers: {
    setStatus: (state,action) =>{
      state.values = actions.setStatus(state.values, action.payload)
    },  
  }
})

export const {setStatus} = playersStatusesSlice.actions

export const selectStatus = (state) => state.playersStatuses.values


export default playersStatusesSlice.reducer