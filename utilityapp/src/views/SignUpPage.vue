<template>
  <div class="signup-page">
    <div class="left-section">
      <img src="../assets/uni_student.jpg" alt="Sign Up Image" />
    </div>
    <div class="right-section">
      <form class="signup-form" @submit.prevent="signUp">
        <h2>Sign Up</h2>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <div class="form-group">
          <label for="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" v-model="confirmPassword" />
        </div>
        <button type="submit" class="signup-button">Sign Up</button>
        <div class="social-login">
          <button class="google-login">Sign Up with Google</button>
        </div>
        <p class="login-link">Already have an account? <a href="/login">Log in</a></p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const signUp = async () => {
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match");
    return;
  }
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    console.log("User signed up:", userCredential.user);
  } catch (error) {
    console.error("Error signing up:", error);
  }
};

const signUpWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("User signed up with Google:", result.user);
  } catch (error) {
    console.error("Error signing up with Google:", error);
  }
};

</script>

<style scoped>
.signup-page {
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

.signup-form {
  width: 100%;
  max-width: 400px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.signup-form h2 {
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

.signup-button {
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

.signup-button:hover {
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
