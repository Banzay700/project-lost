export type UserType = {
  id: string
  firstName: string
  secondName: string
  role: 'WAITER' | 'ADMIN' | 'COURIER'
  userImage?: string
  phoneNumber?: string
  email?: string
  description?: string
}

export type UserPassword = {
  password: string
}
export type UserAvatar = {
  picture: File[] | null
}
export type UserUpdateInfo = Pick<
  UserType,
  'firstName' | 'secondName' | 'phoneNumber' | 'email' | 'description'
>

type UserIdType = Pick<UserType, 'id'>

export type UserUpdateAvatar = {
  body: FormData
  id: string
}
export type UserPartialType = UserIdType & (UserUpdateInfo | UserPassword | FormData)
