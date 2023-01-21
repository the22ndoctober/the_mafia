import { createSlice } from '@reduxjs/toolkit'
import enums from '../../../enums'
import * as actions from '../../../actions/day/playersStatuses/playersStatuses'

export const playersStatusesSlice = createSlice({
  name: 'playersStatuses',
  initialState: {
    values: [
        enums.playerStatuses.alive,
        enums.playerStatuses.alive,
        enums.playerStatuses.alive,
        enums.playerStatuses.alive,
        enums.playerStatuses.alive,
        enums.playerStatuses.alive,
        enums.playerStatuses.alive,
        enums.playerStatuses.alive,
        enums.playerStatuses.deleted,
        enums.playerStatuses.alive
    ]
    },
  reducers: {
    setStatus: (state,action) =>{
      state.values = actions.setStatus(state.values, action)
    },  
  }
})

export const {setStatus} = playersStatusesSlice.actions

export const selectStatus = (state) => state.playersStatuses.values


export default playersStatusesSlice.reducer