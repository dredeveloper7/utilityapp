<template>
  <section class="key-reminders-section">
    <div class="content-wrapper">
      <div class="text-content">
        <h3 class="heading">Never miss a moment with key reminders</h3>
        <div class="image-content">
          <img src="../assets/iphoneMessageImage.png" alt="Phone with Clock" class="phone-clock-image" />
        </div>
        <p class="description">
          Automated messages reminding you of key renewal dates and providing you with the best packages.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.key-reminders-section {
  padding: 60px 20px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.text-content {
  max-width: 800px;
}

.heading {
  font-size: 24px;
  font-weight: bold;
  color: #000000;;
  margin-bottom: 20px;
}

.description {
  font-size: 18px;
  line-height: 1.5;
  color: #666;
}

.image-content {
  margin-top: 20px;
}

.phone-clock-image {
  max-width: 99.9999%;
}

/* Media Queries for responsiveness */
@media (min-width: 768px) {
  .content-wrapper {
    flex-direction: row;
    align-items: center;
    text-align: left;
  }

  .text-content {
    margin-right: 20px;
  }

  .image-content {
    margin-top: 0;
  }

}
</style>
