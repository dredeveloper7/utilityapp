<template>
  <div class="landing-page">
    <header class="header">
      <!-- <div class="header-left">
        <HomeViewBurgerMenu v-if="isMobile" />
      </div> -->
      <div class="header-right">
        <CountdownComponent v-if="!isMobile" />
        <BigNavigationButton v-if="!isMobile" text="Register for Giveaway" navigateTo="signup" color="#6c63ff" />
        <BigNavigationButton class="HeaderLoginButton" text="Login" navigateTo="login" color="#000" />
      </div>
    </header>
    <section class="main-content">
      <div class="overlay-container">
        <div class="text-content">
          <p class="subheading">
            Easy Home management
          </p>
          <h1 class="main-heading">Manage your home with Gafs</h1>
          <div class="cta">
            <BigNavigationButton class="signUp" text="Sign Up" color="#6c63ff" />
          </div>
        </div>
      </div>
    </section>
    <section class="centered-text-section">
      <div class="centered-text-content">
        <p>
          Find the best utility packages for your home and get helpful
          reminders ahead of key expiry dates with your free digital home.
        </p>
      </div>
    </section>

    <ReminderSection />
    <!-- <AboutSection class="page-section" /> -->
    <FaqSection /> <!-- Add the FAQ section here -->
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
import ReminderSection from '../components/ReminderSection.vue';
import FaqSection from '../components/FaqSection.vue';
import '../assets/base.css'; // Add this line to import base.css

const isMobile = ref(false);

const handleResize = () => {
  isMobile.value = window.innerWidth <= 768;
};

const handleScroll = () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.style.backgroundColor = 'rgba(248, 249, 250, 0.95)'; // Less translucent
  } else {
    header.style.backgroundColor = 'rgba(248, 249, 250, 0.8)'; // More translucent
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
  window.addEventListener('scroll', handleScroll); // Add scroll event listener
  handleResize();
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  window.removeEventListener('scroll', handleScroll); // Clean up scroll event listener
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
  padding: 5px 20px 0px 20px;
  background-color: rgba(248, 249, 250, 0.8); /* Initially translucent */
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: background-color 0.3s ease;
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
  background: url('../assets/students_moving_into_house.png') no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px; /* Adjust the value to get the desired curvature */
}

.overlay-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(12, 12, 12, 0.7); /* Dark purple tint */
  z-index: 1;
  border-radius: 20px; /* Adjust the value to get the desired curvature */
}

.text-content {
  position: absolute;
  z-index: 2;
  color: white;
  max-width: 500px;
  padding: 20px;
  /* background: rgba(0, 0, 0, 0.5); */
  border-radius: 10px;
}

.main-heading {
  font-family: 'Figtree', sans-serif;
  font-size: 50px;
  font-weight: normal;

}

.subheading {
  line-height: 1.5;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  font-family: 'Figtree', sans-serif;
  font-style: normal;
  font-weight: bold;
}

.cta {
  margin: 20px 0;
}

.centered-container {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  text-align: center;
  padding: 15px 0; /* Add padding if needed */
  width: 100%; /* Ensure the container takes the full width */
}

.centered-heading {
  font-size: 32px;
  font-family: 'Figtree', sans-serif;
  font-weight: 700;
  color: rgb(0, 0, 0);
  margin: 0; /* Remove default margin */
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


.HeaderLoginButton{
  margin-bottom: 6px;
}

.centered-text-section {
  position: relative;
  width: 100%;
  min-height: 70vh; /* Ensure it takes at least the viewport height */
  background: url('../assets/emojiAssetSmall.png') no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.centered-text-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.centered-text-content {
  position: absolute;
  z-index: 2;
  color: rgb(0, 0, 0);
  text-align: center;
  max-width: 800px;
  padding: 20px;
  border-radius: 10px;
  font-size: 24px;
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
    padding: 11px 22px 22px 22px
  }

  .overlay-container {
    min-height: 70vh; /* Adjust height for smaller screens */
  }

  .text-content {
    margin-right: 0;
    margin-bottom: 20px;
    padding: 10px;
  }

  .main-heading {
    font-size: 30px;
  }

  .subheading {
    font-size: 16px;
  }

  .cta button {
    width: 8em;
    padding: 10px 0;
  }

  .page-section {
    padding: 40px 10px;
  }
}

@media (max-width: 480px) {
  .main-heading {
    font-size: 35px;
  }

  .subheading {
    font-size: 20px;
  }

  .cta button {
    font-size: 16px;
  }

  .page-section {
    padding: 30px 5px;
  }
}

.header{
  padding: 5px 20px 0px 20px
}
</style>
