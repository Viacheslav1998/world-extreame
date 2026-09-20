export type UserRole = 'user' | 'ghost' | 'admin';

export interface AuthPayload {
  email: string, 
  password?: string, 
  role?: UserRole
}