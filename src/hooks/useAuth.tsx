import { useCallback, useEffect } from "react";
import { useAuthStore } from "../store/auth";
import type { LoginResponse } from "../types/auth";
import { mockLoginService, mockLogoutService, mockVerifyTokenService } from "../services";

export function useAuth() {
  const user = useAuthStore((state) => state.user);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);

  // Verifica token al iniciar el hook y obtiene el usuario
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      mockVerifyTokenService(token).then((userFromToken) => {
        if (!userFromToken) {
          logout();
          localStorage.removeItem("token");
        } else if (!user) {
          login(userFromToken);
        }
      });
    }
  }, [login, logout, user]);

  // Login usando el servicio mockeado
  const doLogin = useCallback(
    async (email: string, password: string) => {
      const response: LoginResponse = await mockLoginService(email, password);
      login(response.user);
      localStorage.setItem("token", response.token);
      return response.user;
    },
    [login]
  );

  const doLogout = useCallback(async () => {
    await mockLogoutService();
    logout();
    localStorage.removeItem("token");
  }, [logout]);

  return {
    user,
    login: doLogin,
    logout: doLogout,
    isAuthenticated: !!user,
  };
}