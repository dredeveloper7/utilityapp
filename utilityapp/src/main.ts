import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue'
import { createPinia } from 'pinia';
import router from './router';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);
app.use(router);

const options = {
    position: 'bottom-right',
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: 'button',
    icon: true,
    rtl: false
  };
  
  app.use(Toast, options);
  app.mount('#app');