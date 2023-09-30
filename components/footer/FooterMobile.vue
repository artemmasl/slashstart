<template>
  <div class="container px-4 py-8 text-base">
    <div class="flex item-center flex-col">
      <div class="footer__logo">
        <img :src="logo" class="mx-auto" alt="logo" />
      </div>

      <p class="mt-8 text-center">
        Конструктор и платформа для создания чат-ботов в мессенджерах
      </p>
    </div>

    <div class="flex flex-col mt-8">
      <a
        v-for="(link, i) in ather"
        :key="link.text"
        :class="i > 0 ? 'mt-4' : ''"
        class="cursor-pointer text-bold flex items-center"
        style="color: #5ac300"
        @click="$emit('open-modal', link.event)"
      >
        <span class="mr-2">{{ link.text }}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="55"
          height="16"
          viewBox="0 0 55 16"
          fill="none"
        >
          <path
            d="M54.7071 8.70711C55.0976 8.31658 55.0976 7.68342 54.7071 7.29289L48.3431 0.928932C47.9526 0.538408 47.3195 0.538408 46.9289 0.928932C46.5384 1.31946 46.5384 1.95262 46.9289 2.34315L52.5858 8L46.9289 13.6569C46.5384 14.0474 46.5384 14.6805 46.9289 15.0711C47.3195 15.4616 47.9526 15.4616 48.3431 15.0711L54.7071 8.70711ZM0 9H54V7H0V9Z"
            fill="#5AC300"
          />
        </svg>
      </a>
    </div>

    <div class="flex flex-col mt-8">
      <a
        v-for="(link, i) in links"
        :key="link.text"
        :href="link.href"
        :class="i > 0 ? 'mt-4' : ''"
      >
        {{ link.text }}
      </a>
    </div>

    <div class="flex justify-between mt-8">
      <img
        v-for="social in socials"
        :key="social.text"
        :src="social.src"
        :alt="social.text"
      />
    </div>

    <div class="text text-center my-8">
      <span>© 2021-23, Slashstart.ru</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import logo from "@/assets/logo.svg";

const props = defineProps({
  links: {
    type: Array,
    default: () => [],
  },
  socials: {
    type: Array,
    default: () => [],
  },
  ather: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped>
.footer {
  background: #fff;
  font-size: 20px;
  color: #060841;
}
</style>
