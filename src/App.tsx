import { OrderPaymentInfo } from 'components/order-payment-info'

const App = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '355px', maxHeight: '947px' }}>
        <OrderPaymentInfo totalAmount={64} orderId="32" />
      </div>
    </div>
  )
}
export default App
