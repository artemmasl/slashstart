<template>
  <section class="section about mt-6 px-4" id="about">
    <div class="container">
      <div class="grid lg:grid-cols-2 gap-12">
        <SliderBlock />

        <div
          class="block block__for-whom"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div class="z-10 flex flex-col lg:justify-between h-full">
            <h1 class="title text-cl-primary">Для кого</h1>

            <ul class="text list-disc ml-4 mt-4">
              <li>крупные компании</li>
              <li>мелкий бизнес</li>
              <li>фрилансеры</li>
              <li>блогеры</li>
            </ul>

            <p class="text mt-4">
              + все кто собирается продавать свои товары, услуги или обучающие
              курсы
            </p>
          </div>
        </div>
      </div>

      <div
        class="block mt-12 flex justify-between flex-col lg:flex-row lg:px-16"
      >
        <div class="lg:mt-10">
          <h1 class="text-cl-primary title">
            Конструктор чат-бота без программирования
          </h1>

          <p class="text mt-6">
            Создайте чат бот самостоятельно просто добавляя нужные блоки
          </p>
        </div>

        <img
          :src="pyramid"
          alt=""
          class="w-1/2 mx-auto mt-4 lg:w-auto lg:mt-0 lg:hp-80"
        />
      </div>
    </div>

    <Numbers class="mt-8 h-24" :length="100" />
  </section>
</template>

<script setup>
import SliderBlock from "@/components/sections/index-page/about/SliderBlock.vue";
import pyramid from "@/assets/pyramid.png";
</script>

<style lang="scss" scoped>
.section {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  letter-spacing: -0.36px;
}

.block {
  padding: 24px;
  border-radius: 32px;
  background: linear-gradient(116deg, #fafaff 0%, #fff 100.86%);
  overflow: hidden;
  position: relative;

  @media (min-width: 640px) {
    padding: 48px 64px;
  }

  &_green {
    background: linear-gradient(117deg, #7ef716 0%, #d2ffab 100%);
  }

  &__for-whom {
    &::after {
      content: "";
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      position: absolute;

      background-image: url("@/assets/note.png");
      background-repeat: no-repeat;
      background-position: right 0px;
      background-size: 160px;
    }
    @media (min-width: 640px) {
      padding-bottom: 67px;
      background-size: none;
    }
  }
}
</style>
