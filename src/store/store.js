
import foulsReducer from './reducers/fouls/fouls'
import rolesReducer from './reducers/roles/roles'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {fouls:foulsReducer,
            roles: rolesReducer,          
  }
})