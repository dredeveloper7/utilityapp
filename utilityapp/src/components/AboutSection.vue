<template>
  <section class="about-section">
    <div class="image-container">
      <img src="../assets/laptopImageWithDashboard.png" alt="laptopImageWithDashboard" class='laptopImage'/>
    </div>
    <div class="text-container">
      <h4>About</h4>
      <h2>We provide a variety of services as part of our business model.</h2>
      <p>
        At [Company Name], we simplify the process of managing your utility services while providing exceptional benefits to our members. Our platform allows you to sign up effortlessly, granting you access to exclusive discounted rates from our trusted utility provider partners. By joining us, you'll not only enjoy significant savings on your essential services but also stay informed about any changes to your contracts and discover better deals as they become available. As a token of our appreciation, all members are automatically entered into our seasonal free prize draws, offering you exciting opportunities to win fantastic rewards. Experience convenience and savings with [Company Name], where we prioritize your needs and keep you updated with the best offers in the market.
      </p>
      <SignUpButton text="Sign up"/>
    </div>
  </section>
</template>

<script setup>
import SignUpButton from './BigNavigationButton.vue'
</script>

<style scoped>
.about-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 20px;
}

.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container img {
  max-width: 100%;
  height: auto;
}

.text-container {
  flex: 2;
  padding-left: 40px;
}

.text-container h4 {
  font-size: 16px;
  color: #6c63ff;
  margin-bottom: 10px;
}

.text-container h2 {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
}

.text-container p {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}

.read-more-btn {
  background-color: #6c63ff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.read-more-btn:hover {
  background-color: #5753d3;
}

p {
  color: rgb(108, 117, 125);
  position: static;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin: 20px 0px 0px;
}

/* Media Queries for responsiveness */
@media (max-width: 768px) {
  .about-section {
    flex-direction: column;
  }

  .text-container {
    padding-left: 0;
    padding-top: 20px;
    padding: 20px
  }

  .text-container h4 {
    font-size: 14px;
  }

  .text-container h2 {
    font-size: 24px;
  }

  .text-container p {
    font-size: 14px;
  }

  .read-more-btn {
    width: 100%;
    padding: 10px;
    font-size: 14px;
  }
  .laptopImage {
    width: 60%;
    margin: 20px;
  }
}

@media (max-width: 480px) {
  .text-container h2 {
    font-size: 20px;
  }

  .text-container p {
    font-size: 12px;
  }

  .read-more-btn {
    font-size: 12px;
  }
}
</style>
