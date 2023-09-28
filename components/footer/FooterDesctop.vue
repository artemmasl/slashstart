<template>
    <div class="container grid grid-cols-4 gap-4 px-4 py-16">
      <div class="flex flex-col">
        <div class="footer__logo">
          <img :src="logo" alt="logo" />
        </div>

        <p class="mt-8">
          Конструктор и платформа для создания чат-ботов в мессенджерах
          <br />
          <br />

          © 2021-23, Slashstart.ru
        </p>
      </div>

      <div class="flex flex-col">
        <a
          v-for="(link, i) in links"
          :key="link.text"
          :href="link.href"
          :class="i > 0 ? 'mt-4' : ''"
        >
          {{ link.text }}
        </a>
      </div>

      <div class="flex flex-col">
        <a
          v-for="(social, i) in socials"
          :key="social.text"
          :href="social.href"
          :class="i > 0 ? 'mt-4' : ''"
          class="flex"
        >
          {{ social.text }}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="24"
            viewBox="0 0 28 24"
            fill="none"
          >
            <path
              d="M8.81226 17.274C8.41132 17.6539 8.39422 18.2868 8.77405 18.6877C9.15388 19.0887 9.78681 19.1058 10.1877 18.726L8.81226 17.274ZM19.9996 9.02702C20.0146 8.47493 19.5791 8.01529 19.027 8.00037L10.0303 7.75721C9.47822 7.74229 9.01857 8.17775 9.00365 8.72983C8.98873 9.28191 9.42418 9.74156 9.97627 9.75648L17.9733 9.97262L17.7572 17.9697C17.7423 18.5218 18.1777 18.9814 18.7298 18.9964C19.2819 19.0113 19.7416 18.5758 19.7565 18.0237L19.9996 9.02702ZM10.1877 18.726L19.6877 9.72595L18.3123 8.27405L8.81226 17.274L10.1877 18.726Z"
              fill="#060841"
            />
          </svg>
        </a>
      </div>

      <div class="flex flex-col">
        <a
          v-for="(link, i) in ather"
          :key="link.text"
          :class="i > 0 ? 'mt-4' : ''"
          class="cursor-pointer"
          style="color: rgba(90, 195, 0, 1)"
          @click="link.event()"
        >
          {{ link.text }}
        </a>
      </div>
    </div>

</template>

<script setup>
import { ref } from "vue";
import logo from "@/assets/logo.svg";
import InvestModal from "../modals/InvestModal.vue";

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

  @media (min-width: 640px) {
    height: 500px;
  }
}
</style>
