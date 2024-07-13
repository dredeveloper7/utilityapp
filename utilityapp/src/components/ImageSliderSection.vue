<template>
  <div class="landing-page">
    <header class="header">
      <img src="../assets/logo.png" alt="Logo" width="100" />
      <div class="header-right">
        <CountdownComponent />
        <BigNavigationButton text="Register for GiveAway" color="#000" />
      </div>
    </header>
    <main class="main-content">
      <div class="text-content">
        <h1 class="main-heading">Your Home Bills, Simplified!</h1>
        <p class="subheading">
          The free app for students that simplifies your home bills by providing
          the best prices and a single platform to manage them all
        </p>
        <div class="cta">
          <BigNavigationButton text="Sign Up" color="#000" />
        </div>
      </div>
      <img src="../assets/Woman on her laptop.png" alt="Hero Image" class="hero-image" />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CountdownComponent from './CountdownComponent.vue'
import BigNavigationButton from './BigNavigationButton.vue'
import '../assets/base.css'; // Add this line to import base.css

const signUp = () => {
  alert('Sign Up Clicked!');
};

onMounted(() => {
  // Implement countdown timer logic here if needed
});
</script>

<style scoped>

body {
  font-family: 'Figtree', sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;

}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
  width: 100%;
}

.logo {
  flex-shrink: 0;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 20px; /* Adjust the gap as needed */
}

.main-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  max-width: 1200px;
  margin: 20px auto;
  padding:60px 0px 30px;
}
.text-content {
  flex: 1;
  margin-right: 20px;
}
.main-heading {
  font-family: 'Figtree', sans-serif;
  font-size: 60px;
  font-weight: bold;
  margin: 20px 0;
}
.subheading {
  line-height: 1.5;
  font-size: 20px;
  color: rgba(81, 82, 94, 1);
  font-family: "Figtree", sans-serif;
  font-weight: normal;
  font-style: normal;
  margin: 10px 0;
}
.cta {
  margin: 20px 0;
}
.cta button {
  background-color: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}
.cta button:hover {
  background-color: #444;
}
.hero-image {
  overflow: clip;
  position: static;
  max-width: 100%;
  margin: 0px 102.172px 0px 102.164px;
  height: 550px
}

.timer {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
}
.timer div {
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
}
</style>
