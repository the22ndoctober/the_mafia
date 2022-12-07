
import foulsReducer from './reducers/fouls/fouls'
import rolesReducer from './reducers/roles/roles'
import voteReducer from './reducers/day/vote/vote'
import dayReducer from './reducers/day/day'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {fouls:foulsReducer,
            roles: rolesReducer,
            day: dayReducer,         
            vote: voteReducer,
  }
})