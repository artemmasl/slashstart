<template>
  <section class="main pt-10 lg:pt-0" id="main">
    <Numbers 
      class="main__numbers hidden lg:flex"
      :length="100"
    />

    <div class="container main__item px-4">
      <div class="main__text-group w-full lg:w-1/2">
        <h1 class="main__logo-title text-6xl lg:text-9xl title">SlashStart</h1>

        <h3 class="mt-10 main__sub-title lg:text-2xl">Конструктор чат-ботов</h3>

        <p class="mt-4 text">
          Создавайте чат-ботов и автоворонки продаж в мессенджерах без
          программирования
        </p>

        <Button class="mt-12 px-8 py-4" >
          <span class="text" style="font-size: 32px">Создать бот</span>
        </Button>
      </div>
    </div>

    <div class="main__pros mt-8 py-8 lg:mt-4">
      <div class="container flex flex-col px-4 lg:flex-row lg:items-center gap-10">
        <div class="flex items-center w-64">
          <img class="w-12" :src="base" alt="base" data-aos="fade-down" />
          <span class="ml-4 lg:ml-2">База шаблонов</span>
        </div>
        <div class="flex items-center w-64">
          <img class="w-12" :src="squers" alt="squers" />
          <span class="ml-4 lg:ml-2">Максимальная кастомизация</span>
        </div>
        <div class="flex items-center w-64">
          <img class="w-12" :src="code" alt="code" />
          <span class="ml-4 lg:ml-2">Разработка без программирования</span>
        </div>
      </div>
      <img class="main__robot hidden lg:flex" :src="robot" alt="robot" />
    </div>
  </section>
</template>

<script setup>
import base from "@/assets/base.svg";
import squers from "@/assets/squers.svg";
import code from "@/assets/code.svg";
import robot from "@/assets/robot.png";
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  letter-spacing: -0.36px;

  @media (min-width: 640px){
    height: calc(100vh - 70px);
  }

  &__numbers {
    position: absolute;
    transform: rotate(-10deg);
    top: -120px;
    left: -75px;
    flex-wrap: wrap;
    height: auto;
    line-height: 64px;
    max-height: 128px;
  }

  &__item {
    height: 70%;
    display: flex;
    align-items: center;
  }


  &__logo-title {
    color: var(--color-primary);
    font-weight: 900;
  }
  
  &__sub-title {
    font-weight: 700;
  }

  &__pros {
    width: 100%;
    display: flex;
    background: linear-gradient(112deg, #7EF616 35.63%, rgba(126, 246, 22, 0.26) 77.5%);
    font-size: 24px;
    font-weight: 500;
    letter-spacing: -0.36px;
    line-height: 26px;
    position: relative;
  }

  &__robot {
    position: absolute;
    bottom: 0;
    right: 0;
    max-width: 45%;
  }
}
</style>