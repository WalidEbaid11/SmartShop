import { create } from 'zustand';
import type { User } from '../types';
import { authService } from '../services/api/auth';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (userData: {
    name: string;
    email: string;
    password: string;
    role: 'customer' | 'seller';
  }) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: authService.isAuthenticated(),
  
  login: async (email, password) => {
    const { user } = await authService.login(email, password);
    set({ user, isAuthenticated: true });
  },
  
  logout: () => {
    authService.logout();
    set({ user: null, isAuthenticated: false });
  },
  
  register: async (userData) => {
    const { user } = await authService.register(userData);
    set({ user, isAuthenticated: true });
  },
}));