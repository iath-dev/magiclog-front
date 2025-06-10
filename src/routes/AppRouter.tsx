import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import LoginPage from "../pages/auth/Login";
import RegisterPage from "../pages/auth/Register";
import BuyerMain from "../pages/buyer/BuyerMain";

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="auth/login" element={<LoginPage />} />
            <Route path="auth/register" element={<RegisterPage />} />
            <Route path="admin" element={<div>Admin Dashboard</div>} />
            <Route path="/" element={<BuyerMain />} />
            <Route path="seller" element={<div>Seller Dashboard</div>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
)

export default AppRouter;
