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
app.mount('#app');

