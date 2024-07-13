import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import { computed } from 'vue';
import Home from '../views/HomeView.vue';
import Login from '../views/LoginPage.vue';
import Dashboard from '../views/Dashboard.vue';
import SignUp from '../views/SignUpPage.vue';
import { onAuthStateChanged, getAuth } from 'firebase/auth';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }, // Protect this route
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener(); // Remove the listener to avoid memory leaks
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const user = await getCurrentUser();
    if (!user) {
      next({ name: 'login' });
    } else {
      next();
    }
  } else if (to.name === 'login' && (await getCurrentUser())) {
    next({ name: 'dashboard' });
  } else {
    next();
  }
});


export default router;
