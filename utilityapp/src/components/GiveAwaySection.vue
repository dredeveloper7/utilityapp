<template>
  <section class="registration-for-giveaway-section">
    <CountdownComponent class="custom-countdown" />
    <p>Register to enter giveaway</p>
    <BigNavigationButton class="registration-button" text="Register" navigateTo="signup" color="#6c63ff" />
  </section>
</template>

<script setup>
import CountdownComponent from './CountdownComponent.vue'
import BigNavigationButton from './BigNavigationButton.vue'
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

.registration-for-giveaway-section p {
  color: #fff; /* Set text color to white */
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin: 0;
}

.custom-countdown {
  color: hsl(0, 0%, 7%) !important; /* Ensure text color is dark */
}

.registration-button {
  width: auto; /* Make button width adjust to content */
  padding: 10px 20px; /* Adjust padding for desired button size */
}

/* Media Queries for responsiveness */
@media (max-width: 768px) {
  .registration-for-giveaway-section {
    padding: 20px 10px;
  }

  .registration-for-giveaway-section p {
    font-size: 14px;
  }

  .registration-button {
    width: auto; /* Make button width adjust to content */
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .registration-for-giveaway-section p {
    font-size: 12px;
  }

  .registration-button {
    width: auto; /* Make button width adjust to content */
    font-size: 12px;
  }
}
</style>
