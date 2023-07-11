export type UserRegistrationRequest = {
  firstName: string
  secondName: string
  password: string
  role?: 'Waiter' | 'Admin' | 'Courier'
  phoneNumber?: string
  email?: string
  description?: string
  picture?: File
}
