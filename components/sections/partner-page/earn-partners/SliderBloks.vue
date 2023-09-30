<template>
  <div class="container mt-32">
    <div class="flex justify-center">
      <div class="progress-container text-center">
        <div
          class="progress"
          :style="{ width: `${(selectSlide * 100) / 2}%` }"
        />
        <div
          v-for="(slide, i) in slides"
          :key="'circle' + slide.title"
          class="circle"
          :class="{ active: selectSlide >= i }"
        >
          <img :src="slide.imgProgress" class="icon" />

          <div class="text hidden lg:flex font-bold h-1 mt-12">{{ slide.title }}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex lg:mt-12">
    <Swiper
      class="w-4/5 lg:w-2/3"
      :modules="[SwiperAutoplay, SwiperEffectCards]"
      :loop="true"
      :effect="'cards'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      :space-between="500"
      @slideChange="onSlideChange"
    >
      <SwiperSlide
        v-for="slide in slides"
        :key="slide.title"
        class="card w-full flex"
      >
        <div class="">
          <h2 class="title_2 font-bold color-primary">
            {{ slide.title }}
          </h2>
          <p class="text mt-4">
            {{ slide.text }}
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { ref } from "vue";
import notebook from "@/assets/notebook.png";
import check from "@/assets/icons/check.svg";
import rectangles from "@/assets/icons/rectangles.svg";
import user from "@/assets/icons/user.svg";

const selectSlide = ref(0);

const slides = [
  {
    title: "Регистрируйся",
    text: "Сразу после регистрации, даже если вы не планируете создавать чат-ботов, вы получите партнерскую ссылку и специальный промокод.",
    img: notebook,
    imgProgress: check ,
  },
  {
    title: "Привлекайте аудиторию",
    text: "Делитесь полученной ссылкой и промокодом с потенциальными клиентами сервиса. С каждого платежа от ваших клиентов вы будете получать вознаграждение.",
    img: notebook,
    imgProgress: user ,
  },
  {
    title: "Предлагайте свои услуги",
    text: "Помимо пассивного дохода наше партнерство может увеличить ваш активных доход. У нас общая целевая аудитория и мы можем ей делиться, предлагая клиентам комплексные решения.",
    img: notebook,
    imgProgress: rectangles,
  },
];

const onSlideChange = (slide) => {
  selectSlide.value = slide.realIndex;
};
</script>

<style lang="scss" scoped>
.progress-container {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 60px;
  max-width: 100%;
  width: 80%;
}

.progress-container::before {
  content: "";
  background-color: #c4c1c1;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: 100%;
  z-index: -1;
}

.progress {
  background-color: var(--color-primary);
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  z-index: -1;
  transition: 0.4s ease;
}

.circle {
  background: #c4c1c1;
  color: #c4c1c1;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #c4c1c1;
  transition: 0.4s ease;
}

.circle.active {
  border-color: var(--color-primary);
  background-color: #fff;
  color: var(--color-primary);
  scale: 1.1;
}

.circle .icon {
  position: absolute;
  bottom: 30px;
  min-width: 2rem;
  max-width: 2rem;
}
</style>
