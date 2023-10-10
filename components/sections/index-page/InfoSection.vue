<template>
  <section class="cases container px-4 mt-8 lg:mt-52" id="info">
    <div class="grid lg:grid-cols-2 gap-8 lg:gap-16">
      <div>
        <div class="card card__green info__bg-template">
          <h2 class="title">База шаблонов</h2>

          <p class="text mt-4 lg:mt-12">Выбирайте шаблон под свою нишу.</p>
        </div>

        <div
          class="card card__green mt-8 lg:mt-12"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="200"
        >
          <h2 class="title">Статистика</h2>

          <p class="text mt-4 lg:mt-12">
            Используйте UTM-метки и контролируйте потоки трафика.
          </p>
          <p class="text mt-4 lg:mt-12">
            Оценивайте активность пользователей в реальном времени.
          </p>
        </div>

        <div
          class="card info__bg-box mt-8 lg:mt-12"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="200"
        >
          <h2 class="title">Коробочные решения</h2>

          <p class="text mt-4 lg:mt-12">
            Выбирая коробочное решение, Вы экономите свое время на настройку
            чат-бота! Вас автоматически перенаправит на нужные вкладки.
          </p>

          <img src="@/assets/box.png" />
        </div>
      </div>

      <div class="relative">
        <div class="fluffi hidden lg:block">
          <svg
            class="fluffi__shine"
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
          >
            <path
              d="M13 7C7.64706 8.64706 8.02941 8.23529 6.5 14C4.97059 8.23529 5.35294 8.64706 0 7C5.35294 5.35294 4.97059 5.76471 6.5 0C7.64706 5.76471 7.26471 5.35294 13 7Z"
              fill="white"
            />
          </svg>
          <img src="@/assets/fluffy.png" alt="" />
        </div>
        <div
          class="card"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-offset="200"
        >
          <h2 class="title">Уникальные дизайны</h2>

          <p class="text mt-4 lg:mt-12">
            Создайте собственный дизайн, который будет выделять вас среди
            конкурентов.
          </p>

          <div class="info__screens mt-12">
            <div class="info__animation">
              <img :src="screen1" alt="Screen" />
              <img class="mt-4" :src="screen2" alt="Screen" />
            </div>

            <div>
              <img :src="screen3" alt="Screen" />
              <img class="mt-4" :src="screen4" alt="Screen" />
            </div>

            <div>
              <img :src="screen5" alt="Screen" />
              <img class="mt-4" :src="screen6" alt="Screen" />
            </div>
          </div>
        </div>

        <div
          class="card card__green hidden lg:flex mt-12 info__bg-notebook"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-offset="200"
        />

        <div
          class="card card__green mt-8 lg:mt-12"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-offset="200"
        >
          <h2 class="title">Рассылки</h2>

          <p class="text mt-4 lg:mt-12">
            Оповещайте пользователей о новинках в вашем магазине, напоминайте о
            важных событиях и приглашайте подписчиков на вебинары!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SvgTemplateAnimation from "@/components/animation/SvgTemplateAnimation.vue";
import screen1 from "@/assets/screens/screen1.png";
import screen2 from "@/assets/screens/screen2.png";
import screen3 from "@/assets/screens/screen3.png";
import screen4 from "@/assets/screens/screen4.png";
import screen5 from "@/assets/screens/screen5.png";
import screen6 from "@/assets/screens/screen6.png";

const screens = [screen1, screen2, screen3, screen4, screen5, screen6];
</script>

<style lang="scss" scoped>
.info {
  &__screens {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    height: 400px;
    max-height: 400px;

    div:nth-child(even) {
      animation: resize 10s ease infinite both;
    }

    div:nth-child(odd) {
      animation: resize 10s ease infinite both;
      animation-delay: 5s;
    }
  }

  &__bg-notebook {
    height: 300px;
    background: url("@/assets/notebook2.png"),
      linear-gradient(117deg, #7ef716 0%, #d2ffab 100%);
  }

  &__bg-box {
    min-height: 300px;
    position: relative;
    img {
      width: 70%;
      bottom: -50px;
      right: -10px;
      position: absolute;
      animation: fly 5s ease infinite both;
    }

    @media (min-width: 640px) {
      min-height: 602px;
    }
  }

  &__bg-template {
    height: 348px;
    background: url("@/assets/templates.svg"),
      linear-gradient(117deg, #7ef716 0%, #d2ffab 100%);
    background-repeat: no-repeat;
    background-position: right bottom;
  }
}

@keyframes resize {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(100px);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes fly {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(20px);
  }

  100% {
    transform: translateY(0);
  }
}

.fluffi {
  top: -214px;
  bottom: 0;
  right: 0;
  position: absolute;

  &__shine {
    top: 9%;
    bottom: 0;
    left: 31%;
    position: absolute;
    animation: shiny 10s ease infinite both;
  }
}

@keyframes shiny {
  0% {
    transform: scale(0);
  }

  10% {
    transform: scale(2);
  }

  20% {
    transform: scale(0);
  }

  100% {
    transform: scale(0);
  }
}

@keyframes resize2 {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(20px);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
