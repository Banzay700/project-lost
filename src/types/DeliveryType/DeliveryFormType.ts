export type DeliveryFormType = {
  time: string
  clientInfo: {
    name: string
    email?: string
    phoneNumber: string
    paymentMethod: string
    description?: string

    address: {
      city?: string
      street: string
      apartment?: string
    }
  }
}
