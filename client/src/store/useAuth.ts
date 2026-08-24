import { create } from "zustand";
import type { User } from "../types/User";
import api from "../api/axios";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  checkAuth: () => Promise<void>;
  login: (user: User) => void;
  logout: () => Promise<void>;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,

  checkAuth: async () => {
    try {
      const response = await api.get("/user/me");

      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (err) {
      console.error(err);
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
      });
    }
  },

  login: (user) => {
    set({
      user,
      isAuthenticated: true,
    });
  },

  logout: async () => {
    try {
      await api.post("/auth/sign-out");
    } finally {
      set({
        user: null,
        isAuthenticated: false,
      });
    }
  },
}));

export default useAuthStore;