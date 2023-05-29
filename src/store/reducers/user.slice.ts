import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserResponseType, UserStateType, UserType } from 'types'

const defaultUserState: UserType = {
  id: 'Unknown',
  firstName: 'Unknown',
  secondName: 'Unknown',
  role: 'WAITER',
}

const initialState: UserStateType = {
  isAuth: false,
  user: defaultUserState,
  token: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserResponseType>) => {
      state.isAuth = true
      state.user = action.payload.data
      state.token = action.payload.accessToken
    },
    updateUserData: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload
    },
    setUserLogout: (state) => {
      state.isAuth = false
      state.user = {} as UserType
      state.token = null
    },
  },
})

export const { setUserData, updateUserData, setUserLogout } = userSlice.actions

export default userSlice.reducer
