import { useAppDispatch, useAppSelector } from 'hooks'
import { setUserData, setUserLogout, updateUserData } from 'store/reducers'
import { UserResponseType, UserType } from 'types'

export const useUserReducer = () => {
  const dispatch = useAppDispatch()

  const isAuthUser = useAppSelector((state) => state.user.isAuth)
  const userState = useAppSelector((state) => state.user.user)
  const token = useAppSelector((state) => state.user.token)

  const setUser = (user: UserResponseType) => dispatch(setUserData(user))
  const updateUser = (user: UserType) => dispatch(updateUserData(user))
  const userLogout = () => dispatch(setUserLogout())

  return { isAuthUser, userState, token, setUser, updateUser, userLogout }
}
