import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import type { User } from '../../types';

interface AuthResponse {
  token: string;
  user: User;
}

const authApi = axios.create({
  baseURL: `${process.env.VITE_API_URL}/auth`,
});

export const authService = {
  async login(email: string, password: string): Promise<AuthResponse> {
    try {
      const response = await authApi.post('/login', { email, password });
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      return { token, user };
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  async register(userData: {
    name: string;
    email: string;
    password: string;
    role: 'customer' | 'seller';
  }): Promise<AuthResponse> {
    try {
      const response = await authApi.post('/register', userData);
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      return { token, user };
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },

  logout() {
    localStorage.removeItem('token');
  },

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (!token) return false;

    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decoded.exp ? decoded.exp > currentTime : false;
    } catch {
      return false;
    }
  }
};