export interface UserType {
  id: string
  firstName: string
  secondName: string
  role: 'WAITER' | 'ADMIN' | 'COURIER'
  userImage?: string
  phoneNumber?: string
  email?: string
}

type UserIdType = Pick<UserType, 'id'>
type UserWithoutId = Omit<UserType, 'id'>

export type UserPartialType = UserIdType & Partial<UserWithoutId>
