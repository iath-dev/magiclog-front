export type UserRole = 'buyer' | 'seller' | 'admin';

export interface User {
  id: string;
  username: string;
  role: UserRole;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
}

export interface RegisterRequest {
  username: string;
  password: string;
  role: UserRole;
}
