import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { dishReducer, newlyCreatedOrderReducer, userReducer } from './reducers'

import { api } from './api'

const rootReducer = combineReducers({
  dish: dishReducer,
  newlyOrder: newlyCreatedOrderReducer,
  [api.reducerPath]: api.reducer,
  user: userReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
