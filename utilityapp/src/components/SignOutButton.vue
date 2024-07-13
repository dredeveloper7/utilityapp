<template>
  <button @click="handleSignOut" class="sign-out-button">
    Sign Out
  </button>
</template>

<script setup lang="ts">
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const handleSignOut = async () => {
  await authStore.signOut();
  router.push({ name: 'login' });
};
</script>

<style scoped>
.sign-out-button {
  background-color: #ff6b6b;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.sign-out-button:hover {
  background-color: #ff4d4d;
}
</style>
