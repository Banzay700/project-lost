import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout, DishesPage, OrdersPage, BillsPage, DishesPageContent, LoginPage } from 'pages'
import { ROUTES } from './routes.utils'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to={`${ROUTES.DISHES}/pizza`} />} />
        <Route path={ROUTES.DISHES} element={<DishesPage />}>
          <Route index element={<Navigate to="pizza" />} />
          <Route path=":category" element={<DishesPageContent />} />
        </Route>
        <Route path={ROUTES.ORDERS} element={<OrdersPage />} />
        <Route path={ROUTES.BILLS} element={<BillsPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
