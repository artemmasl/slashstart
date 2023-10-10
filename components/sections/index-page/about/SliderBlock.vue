<template>
  <div class="slider relative" data-aos="fade-down" data-aos-duration="500">
    <div
      class="w-full h-full flex slider__container"
      :style="{ marginLeft: -(100 * slectedSlide) + '%' }"
    >
      <div class="slider__offer slider__item">
        <h2 class="title">Что предлагаем?</h2>

        <p class="text mt-4 lg:mb-4 w-full">
          Экономьте на разработке сайта и приложения с нашим инструментом <br />
          <strong>Магазин в мессенджере</strong>
        </p>
      </div>

      <iframe
        width="100%"
        src="https://www.youtube.com/embed/bsd26AGtbgs"
        style="aspect-ratio: 2 / 1"
        allowfullscreen="allowfullscreen"
      ></iframe>
      <iframe
        width="100%"
        src="https://www.youtube.com/embed/wbU6zvuqCJU"
        style="aspect-ratio: 2 / 1"
        allowfullscreen="allowfullscreen"
      ></iframe>
    </div>

    <div class="slider__controls flex gap-2">
      <button
        v-for="slide in slides"
        :key="`controls-${slide}`"
        class="w-4 h-4 rounded-full cursor-pointe"
        :class="slide === slectedSlide ? 'bg-gray-500' : 'bg-white'"
        @click="slectedSlide = slide"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const slectedSlide = ref(0);
const slides = [0, 1, 2];
</script>

<style lang="scss" scoped>
.slider {
  border-radius: 32px;
  background: linear-gradient(117deg, #7ef716 0%, #d2ffab 100%);
  height: 370px;
  overflow: hidden;

  @media (min-width: 640px) {
    height: 470px;
  }

  &__container {
    transition: 0.5s;
  }

  &__controls {
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
  }

  &__item {
    min-width: 100%;
  }

  &__offer {
    width: 100%;
    height: 100%;
    padding: 20px;
    padding-bottom: 67px;
    background-image: url("@/assets/computer.png");
    background-repeat: no-repeat;
    background-position: right 1rem bottom 3rem;
    background-size: 60%;

    display: flex;
    flex-direction: column;

    @media (min-width: 640px) {
      padding: 48px 64px;
      justify-content: space-between;
      background-position: right 25px;
      background-size: none;
    }
  }
}
</style>
