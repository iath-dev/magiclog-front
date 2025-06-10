import type { LoginResponse, User } from '../../types/auth';

// Simulación de autenticación
export const mockLoginService = async (
  email: string,
  _password: string
): Promise<LoginResponse> => {
  let role: User['role'] = 'buyer';
  if (email.includes('admin')) role = 'admin';
  else if (email.includes('seller')) role = 'seller';
  const user: User = {
    id: '1',
    name: email.split('@')[0] + _password.length, // Just a mock name based on email and password length
    email,
    role,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  return {
    user,
    token: 'mock-token-' + user.role,
  };
};

export const mockRegisterService = async (data: {
  name: string;
  email: string;
  password: string;
}): Promise<LoginResponse> => {
  let role: User['role'] = 'buyer';
  if (data.email.includes('admin')) role = 'admin';
  else if (data.email.includes('seller')) role = 'seller';
  const user: User = {
    id: '2',
    name: data.name,
    email: data.email,
    role,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  return {
    user,
    token: 'mock-token-' + user.role,
  };
};

export const mockLogoutService = async (): Promise<void> => {
  return;
};
