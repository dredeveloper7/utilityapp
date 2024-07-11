<template>
  <div class="image-scroller" ref="scroller">
    <div class="image-track" ref="track">
      <div class="image-container" v-for="(image, index) in duplicatedImages" :key="index">
        <img :src="image.src" :alt="image.alt" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const images = ref([
  { src: "src/assets/clients/1.png", alt: 'Image 1' },
  { src: "src/assets/clients/2.png", alt: 'Image 2' },
  { src: "src/assets/clients/3.png", alt: 'Image 3' },
  { src: "src/assets/clients/4.png", alt: 'Image 4' },
  // Add more images as needed
]);

// Duplicate the images to create a seamless loop
const duplicatedImages = ref([...images.value, ...images.value]);

const scroller = ref(null);
const track = ref(null);

let animationFrameId;

const startScrolling = () => {
  const trackWidth = track.value.scrollWidth;
  let scrollPosition = 0;

  const scroll = () => {
    scrollPosition += 1; // Adjust the scrolling speed as needed
    if (scrollPosition >= trackWidth / 2) {
      scrollPosition = 0;
    }
    track.value.style.transform = `translateX(${-scrollPosition}px)`;
    animationFrameId = requestAnimationFrame(scroll);
  };

  scroll();
};

onMounted(() => {
  startScrolling();
});

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrameId);
});
</script>

<style scoped>
.image-scroller {
  overflow: hidden;
  width: 100%;
  position: relative;
}

.image-track {
  display: flex;
  width: calc(200%); /* Double the width to accommodate duplicated images */
  will-change: transform;
}

.image-container {
  display: inline-block;
  width: 300px;
  margin: 5px;
  padding: 40px;
}

.image-container img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
