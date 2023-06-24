export type DeliveryFormType = {
  clientInfo: {
    name: string
    email?: string
    phoneNumber: string
    paymentMethod: string
    description?: string

    address: {
      city?: string
      street: string
      house: string
      apartment?: string
    }
  }
}
