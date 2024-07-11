<template>
  <div class="timer">
    <div v-for="(time, index) in countdown" :key="index">
      <p class="time-value"><strong>{{ time.value }}</strong></p>
      <p class="time-label">{{ time.label }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const countdown = ref([
  { label: 'Days', value: 0 },
  { label: 'Hours', value: 0 },
  { label: 'Minutes', value: 0 },
  { label: 'Seconds', value: 0 }
]);

const targetDate = new Date('2024-12-31T23:59:59'); // Set your target date here

const updateCountdown = () => {
  const now = new Date();
  const difference = targetDate - now;

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    countdown.value = [
      { label: 'Days', value: days },
      { label: 'Hours', value: hours },
      { label: 'Minutes', value: minutes },
      { label: 'Seconds', value: seconds }
    ];
  } else {
    countdown.value = [
      { label: 'Days', value: 0 },
      { label: 'Hours', value: 0 },
      { label: 'Minutes', value: 0 },
      { label: 'Seconds', value: 0 }
    ];
  }
};

let interval;
onMounted(() => {
  updateCountdown(); // Initialize countdown
  interval = setInterval(updateCountdown, 1000); // Update countdown every second
});

onUnmounted(() => {
  clearInterval(interval); // Clear interval when component is unmounted
});
</script>

<style scoped>
/* Import Montserrat font from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

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
  text-align: center;
}
.time-value {
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
}
.time-label {
  font-family: 'Montserrat', sans-serif;
  font-size: 6px;
  text-transform: uppercase;
  margin: 0;
}
</style>
