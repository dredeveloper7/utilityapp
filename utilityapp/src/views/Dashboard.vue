<template>
  <div v-if="isAuthenticated">
    Welcome, {{ user?.email }}!
    <SignOutButton/>
  </div>
  <div v-else>
    Please log in.
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useAuthStore } from '../stores/auth';
import SignOutButton from '../components/SignOutButton.vue';

const authStore = useAuthStore();
const isAuthenticated = computed(() => authStore.isAuthenticated);
const user = computed(() => authStore.user);
</script>
