import { useCallback, useEffect } from "react";
import { useAuthStore } from "../store/auth";
import { loginService } from "../services";
import api from "../api";
import type { User } from "../types/auth";

export function useAuth() {
  const user = useAuthStore((state) => state.user);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);
  const token = localStorage.getItem("access_token");

  // Verifica token al iniciar el hook y obtiene el usuario
  useEffect(() => {
    if (!user && token) {
      // Intenta obtener el perfil real usando el token
      api
        .get<User>("/auth/profile", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          // Si el perfil es válido, actualiza el store
          login(res.data, token);
        })
        .catch(() => {
          // Si el token es inválido, hace logout y limpia el token
          logout();
          localStorage.removeItem("access_token");
        });
    }
  }, [login, logout, user, token]);

  // Login usando el servicio real
  const doLogin = useCallback(
    async (email: string, password: string) => {
      const response = await loginService(email, password);
      login(response.user, response.access_token);
      localStorage.setItem("access_token", response.access_token);
      return response.user;
    },
    [login]
  );

  const doLogout = useCallback(() => {
    logout();
    localStorage.removeItem("access_token");
  }, [logout]);

  return {
    user,
    login: doLogin,
    logout: doLogout,
    isAuthenticated: !!user,
    token
  };
}