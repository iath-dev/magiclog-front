import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import type { UserRole } from "../types/auth";

interface ProtectedRouteProps {
  children: React.ReactNode;
  role?: UserRole; // Optional role prop to restrict access based on user role
}

export const ProtectedRoute = ({ children, role }: ProtectedRouteProps) => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/auth/login" replace />;
  if (role && user?.role !== role) return <Navigate to="/auth/login" replace />;

  return <>{children}</>;
};
