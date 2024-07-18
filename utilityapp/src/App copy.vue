<template>
<div id="app">
  <router-view />
</div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from './stores/auth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const authStore = useAuthStore();

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('onAuthStateChanged: ',user)
      authStore.setUser(user);
      console.log('User signed in:', user);
    }
    else {
      console.log('User signed in:', 'NO USER');
      authStore.clearUser();
    }
  });
});
</script>
