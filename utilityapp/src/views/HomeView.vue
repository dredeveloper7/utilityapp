<template>
  <div class="landing-page">
    <header class="header">
      <!-- <img src="../assets/logo.png" alt="Logo" width="100" /> -->
      <div class="header-right">
        <CountdownComponent />
        <BigNavigationButton text="Register for Giveaway" navigateTo="signup" color="#6c63ff" />
        <BigNavigationButton text="Login" navigateTo="login" color="#000" />
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
          <BigNavigationButton text="Sign Up" color="#6c63ff" />
        </div>
      </div>
      <img src="../assets/Woman on her laptop.png" alt="Hero Image" class="hero-image" />
    </main>
    <FeaturesComponent class='page-section'/>
    <AboutSection class='page-section'/>
    <!-- <GridBulletSection class='GridBulletSection' /> -->
    <section class="client-scroller"/>
      <div class="centered-container">
        <h1 class="centered-heading">Our Utility Providers</h1>
      </div>
      <ClientScroller/>
    <section/>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CountdownComponent from '../components/CountdownComponent.vue'
import BigNavigationButton from '../components/BigNavigationButton.vue'
import GridBulletSection from '../components/LandingPageGridBulletSection.vue'
import ClientScroller from '../components/ClientScroller.vue'
import FeaturesComponent from '../components/FeaturesComponent.vue'
import AboutSection from '../components/AboutSection.vue';
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
  /* margin: 10px */
}

.logo {
  flex-shrink: 0;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.main-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  max-width: 1200px;
  margin: 20px auto;
  padding: 30px 0px 30px;
}

.text-content {
  flex: 1;
  margin-right: 20px;
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
  color: rgba(81, 82, 94, 1);
  font-family: "Figtree", sans-serif;
  font-weight: normal;
  font-style: normal;
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
  max-width: 50%;
  margin: 0 20px;
  height: auto;
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

/* Page Headers */
.centered-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px 0px 40px 0px;
}

.centered-heading {
  color: rgb(0, 0, 0);
  position: static;
  font-size: 32px;
  font-family: Figtree, sans-serif;
  font-weight: 700;
  margin: 0px 0px 20px;
}

/* Media Queries for responsiveness */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
  }

  .header-right {
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
  }

  .main-content {
    flex-direction: column;
    width: 90%;
    padding: 20px 0;
  }

  .text-content {
    margin-right: 0;
    margin-bottom: 20px;
  }

  .main-heading {
    font-size: 36px;
    margin: 20px
  }

  .subheading {
    font-size: 16px;
  }

  .cta button {
    width: 100%;
    padding: 10px 0;
  }

  .hero-image {
    margin: 20px 0;
    height: auto;
    max-width: 50%;
  }

  .page-section, .GridBulletSection {
    width: 100%;
    padding: 0px 0;
  }

  .header-right {
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
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

  .header-right {
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
  }
}

</style>
