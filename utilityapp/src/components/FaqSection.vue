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
  { question: 'Why should I use Manij?', answer: 'Manij is a free service that helps you manage your home utility bills, all in one place, providing reminders and the best packages tailored to you. It is perfect for those moving into a new home or looking to find the best deals for their existing property.', visible: false },
  { question: 'What is a digital home?', answer: 'Your free digital home is assigned to you when you create a profile and is paired with your real-world home.', visible: false },
  { question: 'How does it work?', answer: '1) Create your free digital home, 2) Pair it with your real-world property, 3) Find and manage the best packages for your home.', visible: false },
  { question: 'What is the competition countdown?', answer: 'Create and complete your profile by October 31st to be entered into our draw for £100 Amazon vouchers.', visible: false },
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
  max-width: 800px;
  margin: 0 auto; /* Center the FAQ section */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

.faq-heading {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 10px;
  border-bottom: 2px solid #6c63ff; /* Accent underline */
}

.faq-item {
  margin-bottom: 20px;
  background-color: white;
  padding: 15px 20px;
  border-radius: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease; /* Add transition for hover effect */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for each item */
}

.faq-item:hover {
  transform: translateY(-2px); /* Lift effect on hover */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* Increase shadow on hover */
}

.faq-question {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0; /* Add padding for better click area */
}

.faq-question:hover {
  color: #6c63ff; /* Change color on hover for interactivity */
}

.faq-answer {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin-top: 10px;
  padding-left: 20px; /* Indent the answer for better visual separation */
  border-left: 3px solid #6c63ff; /* Add a left border for styling */
}

.arrow {
  transition: transform 0.3s ease;
}

.arrow.open {
  transform: rotate(180deg);
}
</style>
