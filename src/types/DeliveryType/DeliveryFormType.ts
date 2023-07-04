export type DeliveryAddressType = {
  street: string
  latitude: string
  longitude: string
}

export type DeliveryFormType = {
  time: string
  clientInfo: {
    name: string
    email?: string
    phoneNumber: string
    paymentMethod: string
    description?: string
  }
  address: DeliveryAddressType
}
