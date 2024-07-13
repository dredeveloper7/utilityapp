<template>
  <button :style="{ backgroundColor: color }" class="sign-up-button" @click="signUp">
    {{ text }}
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router';
const props = defineProps({
  text: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#6c63ff'
  },
  navigateTo: {
    type: String,
    default: "signup"
  }
});


const signUp = () => {
  navigateToSignUp();
};

const router = useRouter();

const navigateToSignUp = () => {
  router.push({ name: props.navigateTo });
};
</script>

<style scoped>
.sign-up-button {
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.sign-up-button:hover {
  background-color: #444;
}
</style>
