import { UserType } from './UserType'

export interface UserStateType {
  isAuth: boolean
  user: UserType
  token: string | null
}
