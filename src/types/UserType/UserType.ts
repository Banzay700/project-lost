export interface UserType {
  id: string
  firstName: string
  secondName: string
  userImage: string
  role: 'WAITER' | 'ADMIN' | 'COURIER'
  phoneNumber?: string
  email?: string
}

type UserIdType = Pick<UserType, 'id'>
type UserWithoutId = Omit<UserType, 'id'>

export type UserPartialType = UserIdType & Partial<UserWithoutId>
