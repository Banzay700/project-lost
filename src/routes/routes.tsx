import { Route, Routes } from 'react-router-dom'
import { Layout, DishesPage, OrdersPage, BillsPage } from 'pages'
import { ROUTES } from './routes.utils'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<DishesPage />} />
          <Route path={ROUTES.DISHES} element={<OrdersPage />} />
          <Route path={ROUTES.ORDER} element={<OrdersPage />} />
          <Route path={ROUTES.BILLS} element={<BillsPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default AppRoutes
