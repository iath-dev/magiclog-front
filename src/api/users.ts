import api from '.';
import type { User } from '../types/auth';

export const getSellers = async (token: string): Promise<User[]> => {
  const res = await api.get<User[]>('/users?sellerOnly=true', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
