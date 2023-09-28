<template>
  <div class="header__wrapper">
    <div class="header container px-4">
      <div class="header__logo">
        <img :src="logo" alt="logo" />
      </div>

      <ul class="hidden lg:flex">
        <li v-for="link in links" :key="link.text">
          <NuxtLink
            class="ml-4 h-48 px-2"
            :href="link.to"
          >
            {{ link.text }}
          </NuxtLink>
        </li>
      </ul>

      <div class="header__btn-group hidden lg:flex items-center">
        <NuxtLink to="https://t.me/slashstartru" class="mr-2">
          <img :src="telegram" alt="telegram">
        </NuxtLink>
        <Button text="Вход" :type="2" class="px-8 py-2"/>

        <Button class="ml-2 px-4 py-2" text="Регистрация" :type="1" />
      </div>

      <BurgerButton
        class="lg:hidden"
        :is-active="menuOpen"
        @click="menuOpen = !menuOpen"
      />
    </div>

    <ul
      class="header__links-mobile lg:hidden"
      :class="{ 'header__links-mobile-active': menuOpen }"
    >
      <li v-for="link in links" :key="link.text">
        <NuxtLink
          class="header__link-mobile"
          :to="link.to"
          @click="menuOpen = !menuOpen"
        >
          {{ link.text }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import logo from "@/assets/logo.svg";
import telegram from "@/assets/socials/telegram.svg";

const menuOpen = ref(false);

const links = [
  {
    text: "О платформе",
    to: "/#main",
  },
  {
    text: "Тарифы",
    to: "/#tarifs",
  },
  {
    text: "Партнерам",
    to: "partner",
  },
  {
    text: "Кейсы",
    to: "/#cases",
  },
  {
    text: "Блог",
    to: "https://slashstart.ru/stream/",
  },
];
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  background: #fff;
  position: relative;
  z-index: 2;

  &__wrapper {
    border-bottom: 1px solid #f2f2f2;
    background: #fff;
  }

  &__links-mobile {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    top: -100%;
    left: 0;
    transition: 0.5s ease-in-out;
    background: #fff;
    z-index: 1;

    &-active {
      top: 70px;
    }
  }

  &__link-mobile {
    display: flex;
    width: 100%;
    padding: 12px 16px;
    border-bottom: 1px solid #ccd2d9;
  }
}
</style>