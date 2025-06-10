// Servicio mock para verificar token y devolver usuario
import type { User } from '../../types/auth';

export const mockVerifyTokenService = async (token: string): Promise<User | null> => {
  // Simula decodificar el token y devolver el usuario según el rol en el token
  if (!token) return null;
  let role: User['role'] = 'buyer';
  if (token.includes('admin')) role = 'admin';
  else if (token.includes('seller')) role = 'seller';
  // Simula un usuario asociado al token
  return {
    id: '1',
    name: role,
    email: role + '@mail.com',
    role,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
};
