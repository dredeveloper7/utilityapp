<template>
  <div class="landing-page">
    <header class="header">
      <div class="header-left">
        <img src="../assets/manij_logo.png" alt="Manij Logo" class="logo" />
        <!-- <HomeViewBurgerMenu v-if="isMobile" /> -->
      </div>
      <div class="header-right">
        <CountdownComponent v-if="!isMobile" />
        <BigNavigationButton v-if="!isMobile" text="Register for Giveaway" navigateTo="signup" color="#6c63ff" />
        <BigNavigationButton class="HeaderLoginButton" text="Login" navigateTo="login" color="#000" />
      </div>
    </header>
    <section class="main-content">
      <div class="overlay-container">
        <!-- Add video background -->
        <video autoplay muted loop playsinline class="background-video">
          <source src="../assets/woman_eating_sandwich.mp4" type="video/mp4" />
        </video>
        <div class="text-content">
          <div class="cta">
            <BigNavigationButton class="signUp" text="Sign Up" color="#6c63ff" />
          </div>
          <h1 class="main-heading">Manage your home with Gafs</h1>
          <p class="subheading">Easy Home management</p>
        </div>
      </div>
    </section>

    <!-- Updated Section for Correct Alignment -->
    <section class="findTheBestUtilityPackages">
      <img class="topHalfEmoji" src="../assets/topHalfEmoji.png" alt="Top Half Emoji">
      <div class="centered-text-content">
        <p>
          Find the best utility packages for your home and get 
          helpful reminders ahead of key expiry dates with your free digital home.
        </p>
      </div>
      <img class="bottomHalfEmoji" src="../assets/bottomHalfEmoji.png" alt="Bottom Half Emoji">
    </section>

    <ReminderSection />
    <!-- <AboutSection class="page-section" /> -->
    <FaqSection />
    <!-- <section class="client-scroller">
      <div class="centered-container">
        <h1 v-if="!isMobile" class="centered-heading">Our Utility Providers</h1>
      </div>
      <ClientScroller v-if="!isMobile" />
    </section> -->
    <GiveAwaySection />
    <footer class="footer">
      <p>
        <a href="/terms-and-conditions" class="footer-link">Terms and Conditions</a>
      </p>
    </footer>
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
import '../assets/base.css'; // Import base.css for styling

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

.logo {
  height: 40px; /* Adjust the height as needed */
  width: auto;
  cursor: pointer; /* Optional: Change the cursor to pointer */
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
  min-height: 80vh; /* Ensure it takes at least the viewport height */
  display: flex;
  align-items: flex-end; /* Align items to the bottom */
  justify-content: center;
  border-radius: 20px; /* Adjust the value to get the desired curvature */
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  border-radius: 20px; /* Adjust the value to get the desired curvature */
}

.text-content {
  position: relative;
  z-index: 2;
  color: white;
  max-width: 500px;
  padding: 20px;
  text-align: left; /* Align text to the left */
  margin-bottom: 20px; /* Margin from the bottom */
  background: rgba(0, 0, 0, 0.5); /* Optional: Add a semi-transparent background for better readability */
  border-radius: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the left */
}

.findTheBestUtilityPackages {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #ffffff; /* Match background color for consistency */
  box-sizing: border-box; /* Ensure padding is included in width calculations */
  margin-top: 0px;
  margin-bottom: 0px;
}

.centered-text-content {
  max-width: 800px;
  margin: 20px 0;
  text-align: center;
  border-radius: 10px;
  position: relative;
  color: rgb(0, 0, 0);
  font-size: 20px;
  font-family: 'Figtree', sans-serif;
}

.topHalfEmoji,
.bottomHalfEmoji {
  max-width: 300px; /* Adjust size as needed */
  margin: 0px; /* Adds spacing around the images */
  display: block; /* Ensures images are centered within the flex container */
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

.HeaderLoginButton {
  margin-bottom: 6px;
}

.footer {
  width: 100%;
  padding: 20px 0; /* Add padding for spacing */
  background-color: #f8f9fa; /* Light background color for the footer */
  text-align: center; /* Center-align text */
  border-top: 1px solid #ddd; /* Optional: Add a top border for separation */
}

.footer p {
  margin: 0;
  font-size: 14px;
  color: #333; /* Darker color for text */
  font-family: 'Figtree', sans-serif; /* Match the font to the rest of the page */
}

.footer-link {
  color: #6c63ff; /* Use a consistent color for the link */
  text-decoration: none; /* Remove underline from the link */
  font-weight: bold;
}

.footer-link:hover {
  text-decoration: underline; /* Underline on hover for accessibility */
  color: #5751d9; /* Darker shade on hover */
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
    padding: 11px 22px 22px 22px;
  }

  .overlay-container {
    min-height: 85vh; /* Adjust height for smaller screens */
  }

  .text-content {
    margin-right: 0;
    margin-bottom: 70px;
    padding: 20px;
  }

  .main-heading {
    font-size: 40px;
    padding: 5px 0px 10px 0px;
  }

  .subheading {
    font-size: 20px;
    padding: 5px 0px 10px 0px;
  }

  .cta button {
    width: 8em;
    padding: 10px 0;
  }

  .findTheBestUtilityPackages {
    padding: 20px 10px; /* Adjust padding for smaller screens */
  }

  .centered-text-content {
    padding: 15px;
    font-size: 18px;
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

.header {
  padding: 5px 20px 0px 20px;
}
</style>
