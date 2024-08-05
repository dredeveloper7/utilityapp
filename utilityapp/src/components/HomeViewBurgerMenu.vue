<template>
  <div>
    <button @click="toggleMenu" class="burger-menu">
      <span class="burger-bar"></span>
      <span class="burger-bar"></span>
      <span class="burger-bar"></span>
    </button>
    <nav class="nav-menu" :class="{ open: isMenuOpen }">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/dashboard">Dashboard</router-link></li>
        <li><router-link to="/details">My Details</router-link></li>
        <li><button @click="signOut" class="sign-out-button">Sign Out</button></li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const signOut = () => {
  alert('Sign Out Clicked!');
};
</script>

<style scoped>
.burger-menu {
  display: none;
  flex-direction: column;
  cursor: pointer;
  background: none;
  border: none;
  padding: 10px;
  z-index: 1000;
  position: relative;
  left: 10px;
}

.burger-bar {
  width: 25px;
  height: 3px;
  background-color: #333;
  margin: 4px 0;
  transition: all 0.3s ease-in-out;
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

@media (max-width: 768px) {
  .burger-menu {
    display: flex;
  }

  .nav-menu {
    position: absolute;
    top: 60px;
    left: 0;
    background: white;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    display: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 999;
  }

  .nav-menu.open {
    display: flex;
  }

  .nav-menu ul {
    flex-direction: column;
    gap: 10px;
  }

  .nav-menu li {
    width: 100%;
  }

  .nav-menu a, .sign-out-button {
    width: 100%;
    text-align: left;
    padding: 10px;
    display: block;
  }
}
</style>
