import { createSlice } from '@reduxjs/toolkit'
import * as actions from '../../actions/roles/roles'
import enums from '../../enums'

export const rolesSlice = createSlice({
  name: 'roles',
  initialState: {
    values:[
        enums.roles.none,
        enums.roles.none,
        enums.roles.none,
        enums.roles.none,
        enums.roles.none,
        enums.roles.none,
        enums.roles.none,
        enums.roles.none,
        enums.roles.none,
        enums.roles.none
    ]
    },
  reducers: {
    setRole: (state,action) => {
      state.values[action.payload[0]] = actions.setRole(action.payload[1])
    },
    
  }
})

export const {setRole} = rolesSlice.actions

export const selectRole = (state) => state.roles.values

export default rolesSlice.reducer