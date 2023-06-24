export interface RadioButtonCardContentItemType {
  value: string
  orderNumber: number
  clientName: string
  deliveryAddress: string
  timeToReady: string
  status: { label: 'Priority' | 'Timely' | 'Flexible'; type: 'red' | 'primary' | 'green' }
}

export interface RadioButtonCardDeliveryItemType extends RadioButtonCardContentItemType {
  isChecked?: string
  onChange: (value: string) => void
}
