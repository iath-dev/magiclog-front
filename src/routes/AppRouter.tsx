import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFound, LoginPage, RegisterPage, BuyerMain, SellerProducts, AdminProductList } from '../pages';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="auth/login" element={<LoginPage />} />
      <Route path="auth/register" element={<RegisterPage />} />
      <Route path="admin" element={<AdminProductList />} />
      <Route path="/" element={<BuyerMain />} />
      <Route path="seller" element={<SellerProducts />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
