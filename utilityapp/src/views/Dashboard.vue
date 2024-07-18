<template>
  <div>
    <header class="header">
    <!-- <img src="../assets/logo.png" alt="Logo" width="100" /> -->
      <div class="header-right">
        <button @click="toggleMenu" class="burger-menu">
          <span class="burger-bar"></span>
          <span class="burger-bar"></span>
          <span class="burger-bar"></span>
        </button>
        <nav class="nav-menu" :class="{ 'open': isMenuOpen }">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/dashboard">Dashboard</router-link></li>
            <li><button @click="signOut" class="sign-out-button">Sign Out</button></li>
          </ul>
        </nav>
      </div>
    </header>
    <div class="dashboard">
      <h1>Service Dashboard</h1>
      <div class="service-cards">
        <div class="card" v-for="service in services" :key="service.name">
          <h2>{{ service.name }}</h2>
          <p>{{ service.details }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();
const isMenuOpen = ref(false);

const services = ref([
  { name: 'Energy Provider', details: 'Provider: ABC Energy\nPlan: Basic Plan\nUsage: 450 kWh' },
  { name: 'Internet Provider', details: 'Provider: XYZ Internet\nPlan: 100 Mbps\nUsage: 250 GB' },
  { name: 'Heating', details: 'Status: Active\nTemperature: 22°C\nUsage: 150 m³' },
  { name: 'Electric', details: 'Provider: ABC Energy\nPlan: Basic Plan\nUsage: 450 kWh' },
  { name: 'Water', details: 'Provider: City Water\nUsage: 1200 L\nStatus: Active' }
]);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const signOut = () => {
  authStore.clearUser();
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
  width: 100%;
  position: relative;
}

.header-right {
  display: flex;
  align-items: center;
}

.burger-menu {
  display: none;
  flex-direction: column;
  cursor: pointer;
  background: none;
  border: none;
  padding: 10px;
}

.burger-bar {
  width: 25px;
  height: 3px;
  background-color: #333;
  margin: 4px 0;
}

.nav-menu {
  display: flex;
  align-items: center;
}

.nav-menu ul {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.nav-menu li {
  margin: 0;
}

.sign-out-button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
}

/* Mobile styles */
@media (max-width: 768px) {
  .burger-menu {
    display: flex;
  }

  .nav-menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 20px;
    background-color: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 8px;
    width: 200px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .nav-menu.open {
    display: flex;
  }

  .nav-menu ul {
    flex-direction: column;
    gap: 10px;
    padding: 10px;
  }

  .nav-menu li {
    width: 100%;
    text-align: center;
  }

  .sign-out-button {
    width: 100%;
  }
}

.dashboard {
  font-family: 'Arial', sans-serif;
  text-align: center;
  padding: 20px;
}

.service-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.card {
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  width: 200px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

.card p {
  font-size: 14px;
  color: #666;
  white-space: pre-line;
}
</style>
