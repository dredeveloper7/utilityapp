<template>
  <div class="login-page">
    <div class="left-section">
      <img src="../assets/uni_student.jpg" alt="login Image" />
    </div>
    <div class="right-section">
      <form class="login-form" @submit.prevent="login">
        <h2>Login</h2>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" />
        <button type="submit" class="login-button">Login</button>
        </div>
        <div class="social-login">
          <button class="google-login">Log In with Google</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import { auth, db } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const router = useRouter();
const authStore = useAuthStore();

const email = ref('');
const password = ref('');

const login = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;
    authStore.setUser(user); // Update the state with the user
    router.push({ name: 'dashboard' }); // Ensure this route name is correct
  } catch (error) {
    console.error('Error logging in:', error);
    alert(error.message);
  }
};
</script>

<style scoped>
.login-page {
  display: flex;
  height: 100vh;
}

.left-section {
  flex: 1;
  background: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left-section img {
  max-width: 100%;
  height: auto;
}

.right-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
}

.login-form {
  width: 100%;
  max-width: 400px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.login-form h2 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
}

.login-button {
  width: 100%;
  padding: 10px;
  background-color: #6c63ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 16px;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #a29ee8;
}

.social-login {
  margin-top: 20px;
}

.google-login {
  width: 100%;
  padding: 10px;
  background-color: #4285f4;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.google-login:hover {
  background-color: #357ae8;
}

.login-link {
  margin-top: 20px;
  font-size: 14px;
  color: #666;
}

.login-link a {
  color: #4285f4;
  text-decoration: none;
}

.login-link a:hover {
  text-decoration: underline;
}
</style>
