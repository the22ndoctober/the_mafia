
import foulsReducer from './reducers/fouls/fouls'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {fouls:foulsReducer}
})