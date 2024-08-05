<template>
  <section class="faq-section">
    <h2 class="faq-heading">Frequently Asked Questions</h2>
    <div class="faq-item" v-for="(faq, index) in faqs" :key="faq.question">
      <div class="faq-question" @click="toggleAnswer(index)">
        <span>{{ faq.question }}</span>
        <span :class="{'arrow': true, 'open': faq.visible}">▼</span>
      </div>
      <p class="faq-answer" v-show="faq.visible">{{ faq.answer }}</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const faqs = ref([
  { question: 'What is UtilityApp?', answer: 'UtilityApp is a free app that simplifies your home bills by providing the best prices and a single platform to manage them all.', visible: false },
  { question: 'How do I sign up?', answer: 'You can sign up by clicking the Sign Up button and filling out the registration form.', visible: false },
  { question: 'Can I use UtilityApp on my phone?', answer: 'Yes, UtilityApp is compatible with both desktop and mobile devices.', visible: false },
  { question: 'How does UtilityApp help save money?', answer: 'UtilityApp compares prices from different utility providers to help you find the best deals.', visible: false },
  // Add more FAQs as needed
]);

const toggleAnswer = (index) => {
  faqs.value[index].visible = !faqs.value[index].visible;
};
</script>

<style scoped>
.faq-section {
  padding: 60px 20px;
  background-color: #f9f9f9;
  text-align: left;
}

.faq-heading {
  font-size: 32px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 40px;
}

.faq-item {
  margin-bottom: 20px;
}

.faq-question {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-answer {
  font-size: 16px;
  color: #666;
  line-height: 1.5;
  margin-top: 10px;
}

.arrow {
  transition: transform 0.3s ease;
}

.arrow.open {
  transform: rotate(180deg);
}
</style>
