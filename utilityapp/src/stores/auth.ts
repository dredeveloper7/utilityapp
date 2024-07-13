import { defineStore } from 'pinia';
import { signOut, setPersistence, browserLocalPersistence, onAuthStateChanged } from 'firebase/auth';
import type { User } from 'firebase/auth';
import { auth } from '../firebaseConfig';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    isAuthenticated: false,
  }),
  actions: {
    async setUser(newUser: User) {
      this.user = newUser;
      this.isAuthenticated = true;
    },
    clearUser() {
      this.user = null;
      this.isAuthenticated = false;
    },
    async checkAuthStatus() {
      const user = auth.currentUser;
      if (user) {
        this.setUser(user);
      }
    },
    async setPersistence() {
      try {
        await setPersistence(auth, browserLocalPersistence);
      } catch (error) {
        console.error('Error setting persistence:', error);
      }
    },
    async signOut() {
      try {
        await signOut(auth);
        this.clearUser();
      } catch (error) {
        console.error('Error signing out:', error);
      }
    },
    setupAuthStateListener() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.setUser(user);
        } else {
          this.clearUser();
        }
      });
    },
  },
});

export function useAuthStoreWithSetup() {
  const authStore = useAuthStore();
  authStore.setupAuthStateListener();
  return authStore;
}
