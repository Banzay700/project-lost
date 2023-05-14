import { combineReducers, configureStore } from '@reduxjs/toolkit'
import orderReducer from './reducers/OrderSlice'
import { dishAPI } from '../services/DishService'
import { orderAPI } from '../services/OrderService'
import { tableAPI } from '../services/TableService'

const rootReducer = combineReducers({
  orderReducer,
  [dishAPI.reducerPath]: dishAPI.reducer,
  [orderAPI.reducerPath]: orderAPI.reducer,
  [tableAPI.reducerPath]: tableAPI.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(dishAPI.middleware, orderAPI.middleware, tableAPI.middleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
