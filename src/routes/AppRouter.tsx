import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  NotFound,
  LoginPage,
  RegisterPage,
  BuyerMain,
  SellerProducts,
  AdminProductList,
} from '../pages';
import { ProtectedRoute } from './ProtectedRoute';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<BuyerMain />} />
      <Route
        path="admin"
        element={
          <ProtectedRoute role="admin">
            <AdminProductList />
          </ProtectedRoute>
        }
      />
      <Route path="auth/login" element={<LoginPage />} />
      <Route path="auth/register" element={<RegisterPage />} />
      <Route
        path="seller"
        element={
          <ProtectedRoute role="seller">
            <SellerProducts />
          </ProtectedRoute>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
