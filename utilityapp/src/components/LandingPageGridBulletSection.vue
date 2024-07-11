<template>
  <div class="landing-page-section">
    <div class="left-section">
      <h1 class="main-heading">Reducing the Moving-In Stress</h1>
      <SignUpButton text="Sign Up Free" color="#000" />
    </div>
    <div class="right-section">
      <div class="feature">
        <div class="feature-icon">
          <img src="../assets/icon1.png" alt="Icon 1" />
        </div>
        <div class="feature-text">
          <h3>Sign Up for Free</h3>
          <p>Download Spark.AI and create your account. It’s quick, easy, and totally free to start.</p>
        </div>
      </div>
      <div class="feature">
        <div class="feature-icon">
          <img src="../assets/icon2.png" alt="Icon 2" />
        </div>
        <div class="feature-text">
          <h3>Choose Your Subjects</h3>
          <p>Select from a wide range of subjects and topics. Spark.AI has something for everyone.</p>
        </div>
      </div>
      <div class="feature">
        <div class="feature-icon">
          <img src="../assets/icon3.png" alt="Icon 3" />
        </div>
        <div class="feature-text">
          <h3>Pick Your Quiz Style</h3>
          <p>Try out our 32 different study methods – from timed quizzes to interactive games – and discover what works best for you.</p>
        </div>
      </div>
      <div class="feature">
        <div class="feature-icon">
          <img src="../assets/icon4.png" alt="Icon 4" />
        </div>
        <div class="feature-text">
          <h3>Track Your Progress</h3>
          <p>Watch your skills improve with detailed analytics and insights. Spark.AI helps you stay on top of your game.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SignUpButton from './SignUpButton.vue';
</script>

<style scoped>
.landing-page-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
}

.left-section {
  max-width: 40%;
}

.main-heading {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}

.right-section {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 60%;
}

.feature {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 48%;
}

.feature-icon {
  margin-right: 15px;
}

.feature-text h3 {
  font-size: 16px;
  font-weight: bold;
  margin: 0;
}

.feature-text p {
  font-size: 14px;
  margin: 5px 0 0;
}
</style>
