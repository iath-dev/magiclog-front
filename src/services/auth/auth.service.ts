import api from '../../api';
import type { LoginResponse, RegisterRequest, User } from '../../types/auth';

export const loginService = async (
  email: string,
  password: string
): Promise<{ user: User; access_token: string }> => {
  const requestBody = { username: email, password: password };
  const { data } = await api.post<LoginResponse>('/auth/login', requestBody, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  // Guarda el token en localStorage
  localStorage.setItem('access_token', data.access_token);

  // Llama al endpoint de perfil con el token
  const profileRes = await api.get<User>('/auth/profile', {
    headers: {
      Authorization: `Bearer ${data.access_token}`,
    },
  });

  return {
    user: profileRes.data,
    access_token: data.access_token,
  };
};

export const registerService = async (data: RegisterRequest): Promise<void> => {
  try {
    await api.post('/auth/register', data, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    return;
  } catch (error) {
    console.error(error);
  }
};

export const mockLogoutService = async (): Promise<void> => {
  return;
};
