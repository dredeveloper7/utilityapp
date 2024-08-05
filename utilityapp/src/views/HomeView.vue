<template>
  <div class="landing-page">
    <header class="header">
      <div class="header-left">
        <HomeViewBurgerMenu v-if="isMobile" />
      </div>
      <div class="header-right">
        <CountdownComponent v-if="!isMobile" />
        <BigNavigationButton v-if="!isMobile" text="Register for Giveaway" navigateTo="signup" color="#6c63ff" />
        <BigNavigationButton class="HeaderLoginButton" text="Login" navigateTo="login" color="#000" />
      </div>
    </header>
    <section class="main-content">
      <div class="overlay-container">
        <div class="text-content">
          <h1 class="main-heading">Your Home Bills, Simplified!</h1>
          <p class="subheading">
            The free app for students that simplifies your home bills by providing
            the best prices and a single platform to manage them all
          </p>
          <div class="cta">
            <BigNavigationButton text="Sign Up" color="#6c63ff" />
          </div>
        </div>
      </div>
    </section>
    <FeaturesComponent class="page-section" />
    <ReminderSection/>
    <AboutSection class="page-section" />
    <section class="client-scroller">
      <div class="centered-container">
        <h1 v-if="!isMobile" class="centered-heading">Our Utility Providers</h1>
      </div>
      <ClientScroller v-if="!isMobile" />
    </section>
    <GiveAwaySection />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import CountdownComponent from '../components/CountdownComponent.vue';
import BigNavigationButton from '../components/BigNavigationButton.vue';
import ClientScroller from '../components/ClientScroller.vue';
import FeaturesComponent from '../components/FeaturesComponent.vue';
import AboutSection from '../components/AboutSection.vue';
import HomeViewBurgerMenu from '../components/HomeViewBurgerMenu.vue';
import GiveAwaySection from '../components/GiveAwaySection.vue';
import ReminderSection from '../components/ReminderSection.vue'
import '../assets/base.css'; // Add this line to import base.css

const isMobile = ref(false);

const handleResize = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize();
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

const signUp = () => {
  alert('Sign Up Clicked!');
};
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
  overflow-x: hidden; /* Prevent horizontal scroll */
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
  width: 100%;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.header-right {
  display: flex;
  align-items: center;
  margin-left: auto;
}

.main-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  margin: 0 auto;
  padding: 0;
}

.overlay-container {
  position: relative;
  width: 100%;
  min-height: 100vh; /* Ensure it takes at least the viewport height */
  background: url('../assets/Woman on her laptop.png') no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-content {
  position: absolute;
  z-index: 2;
  color: white;
  text-align: center;
  max-width: 600px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}

.main-heading {
  font-family: 'Figtree', sans-serif;
  font-size: 60px;
  font-weight: bold;
  margin: 20px;
}

.subheading {
  line-height: 1.5;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  font-family: 'Figtree', sans-serif;
  font-weight: normal;
  font-style: normal;
}

.cta {
  margin: 20px 0;
}

.cta button {
  background-color: #6c63ff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.cta button:hover {
  background-color: #5751d9;
}

.page-section {
  padding: 60px 20px;
  width: 100%;
  background-color: #f9f9f9; /* Add background color for visibility */
  margin-bottom: 20px; /* Add margin for spacing */
}

.timer {
  display: flex;
  justify-content: center;
}

/* Media Queries for responsiveness */
@media (max-width: 768px) {
  .header-left {
    flex-direction: row;
  }

  .header-right {
    flex-direction: row;
    justify-content: flex-end;
  }

  .main-content {
    flex-direction: column;
    width: 100%;
    padding: 0
  }

  .overlay-container {
    min-height: 50vh; /* Adjust height for smaller screens */
  }

  .text-content {
    margin-right: 0;
    margin-bottom: 20px;
    padding: 10px;
  }

  .main-heading {
    font-size: 36px;
    margin: 20px;
  }

  .subheading {
    font-size: 16px;
  }

  .cta button {
    width: 100%;
    padding: 10px 0;
  }

  .page-section {
    padding: 40px 10px;
  }
}

@media (max-width: 480px) {
  .main-heading {
    font-size: 28px;
  }

  .subheading {
    font-size: 14px;
  }

  .cta button {
    font-size: 16px;
  }

  .page-section {
    padding: 30px 5px;
  }
}
</style>
