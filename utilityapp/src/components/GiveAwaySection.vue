<template>
  <section class="registration-for-giveaway-section">
    <p class="registration-text">Complete your profile by December 16th to win £100 Amazon vouchers</p>
    <CountdownComponent class="custom-countdown" />
    <BigNavigationButton class="registration-button" text="Register" navigateTo="signup" color="#6c63ff" />
  </section>
</template>

<script setup>
import CountdownComponent from './CountdownComponent.vue';
import BigNavigationButton from './BigNavigationButton.vue';
</script>

<style scoped>
.registration-for-giveaway-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  gap: 20px; /* Add some space between the elements */
  background-color: #000; /* Set background color to black */
  color: #fff; /* Set text color to white for better contrast */
}

.registration-text {
  color: #fff; /* Set text color to white */
  font-family: 'Figtree', sans-serif; /* Use the same font as the rest of the codebase */
  font-size: 20px; /* Increase font size for better readability */
  font-weight: 400;
  line-height: 24px;
  margin: 0;
  text-align: center; /* Center the text */
}

.custom-countdown {
  color: hsl(0, 0%, 7%) !important; /* Ensure text color is dark */
}

.registration-button {
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

/* Media Queries for responsiveness */
@media (max-width: 768px) {
  .registration-for-giveaway-section {
    padding: 20px 10px;
  }
}

@media (max-width: 480px) {
  .registration-text {
    font-size: 18px; /* Adjust font size for smaller screens */
  }
}
</style>
