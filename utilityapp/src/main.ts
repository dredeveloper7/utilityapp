import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { useAuthStoreWithSetup } from './stores/auth'; // Import the function that sets up the listener

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);
app.use(router);

const authStore = useAuthStoreWithSetup(); // Use the setup function to initialize the auth store

authStore.setPersistence().then(() => {
  authStore.checkAuthStatus().then(() => {
    if (!app._isMounted) {
      app.mount('#app');
      app._isMounted = true; // Mark the app as mounted
    }
  });
});
