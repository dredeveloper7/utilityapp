<template>
  <section class="features-section pattern-background">
    <h2 class="section-heading">Setup as simple as 1, 2, 3...</h2>
    <div class="features">
      <div class="feature" v-for="(feature, index) in features" :key="index">
        <div class="feature-icon">
          {{index + 1}}
        </div>
        <div class="feature-content">
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const features = ref([
  {
    title: 'Sign Up for an Account:',
    description: "Start your journey by creating an account with us. Simply fill out the registration form with your details, and you'll be all set to begin exploring the benefits we offer.",
    // icon: 'src/assets/icon1.png'
  },
  {
    title: 'Enjoy Discounted Rates from Our Utility Provider Partners:',
    description: "Once you have an account, you can immediately start enjoying exclusive discounted rates from our trusted utility provider partners. Whether it's electricity, gas, or internet, we ensure you get the best deals available.",
    // icon: 'src/assets/icon2.png'
  },
  {
    title: 'Stay Updated and Enter Free Prize Draws:',
    description: "As a valued member, we'll keep you updated on any changes to your contracts and alert you to better deals from service providers. Additionally, you'll be automatically entered into our seasonal prize draws, giving you a chance to win fantastic rewards just for being a member.",
    // icon: 'src/assets/icon3.png'
  }
]);
</script>

<style scoped>
.features-section {
  padding: 40px 20px;
  text-align: center;
}

.section-heading {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 40px;
}

.features {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.feature {
  max-width: 30%;
  padding: 20px;
  text-align: center;
}

.feature-icon {
  width: 50px;
  height: 50px;
  background-color: #6c63ff;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 24px;
  margin: 0 auto 20px;
}

.feature-icon img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.feature-content h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}


/* text (p tages) */
p {
    color: rgb(108, 117, 125);
    position: static;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin: 20px 0px 0px;
}

.pattern-background {
  background-color: #f2f2f2; /* Off-white base color */
  background-size: 40px 40px; /* Adjust the size of the pattern */
}
</style>
