<template>
  <div class="footer mt-32">
    <FooterDesctop
      v-if="isDesktop"
      :links="links"
      :socials="socials"
      :ather="ather"
      @open-modal="openModal($event)"
    />
    <FooterMobile
      v-else
      :links="links"
      :socials="socials"
      :ather="ather"
      @open-modal="openModal($event)"
    />
  </div>

  <InvestModal :open="ivesterModal" @close="ivesterModal = !ivesterModal" />
  <WorkModal :open="workModal" @close="workModal = !workModal" />
  <CoopModal :open="coopModal" @close="coopModal = !coopModal" />
</template>

<script setup>
import { ref } from "vue";
import logo from "@/assets/logo.svg";
import vk from "@/assets/socials/vk.svg";
import instagram from "@/assets/socials/instagram.svg";
import telegram from "@/assets/socials/telegram.svg";
import vc from "@/assets/socials/vc.svg";
import habr from "@/assets/socials/habr.svg";
import dzen from "@/assets/socials/dzen.svg";
import InvestModal from "../modals/InvestModal.vue";
import WorkModal from "../modals/WorkModal.vue";
import CoopModal from "../modals/CoopModal.vue";
import FooterDesctop from "./FooterDesctop.vue";
import FooterMobile from "./FooterMobile.vue";

const ivesterModal = ref(false);
const workModal = ref(false);
const coopModal = ref(false);
const { isDesktop } = useDevice();

const links = [
  { text: "Партнерам", href: "/partner" },
  { text: "Кейсы", href: "#cases" },
  /* { text: "База знаний", href: "https://slashstart.ru/stream/" }, */
  { text: "Конфиденциальность", href: "/privacy" },
  { text: "Договор оферты", href: "/agreement" },
];

const socials = [
  { text: "ВКонтакте", src: vk, href: "https://vk.com/slashstart" },
  { text: "Telegram", src: telegram, href: "https://t.me/slashstartru" },
  {
    text: "Instagram",
    src: instagram,
    href: "https://www.instagram.com/slashstart.ru/",
  },
  {
    text: "Дзен",
    src: dzen,
    href: "https://sso.dzen.ru/install?uuid=f40ea352-0810-43e5-bffe-936799370aa7",
  },
  { text: "Хабр", src: habr, href: "https://habr.com/ru/users/Slash_Start/" },
  { text: "VC", src: vc, href: "https://vc.ru/u/2329413-slash-start-bot" },
  { text: "Почта", src: vk, href: "#" },
];

const ather = [
  {
    text: "Работа в компании",
    event: "work",
  },
  {
    text: "Стать инвестором",
    event: "invest",
  },
  {
    text: "Предложить сотрудничество",
    event: "coop",
  },
];

const openModal = (event) => {
  console.log(event);
  switch (event) {
    case "work":
      workModal.value = !workModal.value;
      break;
    case "invest":
      ivesterModal.value = !ivesterModal.value;
      break;
    case "coop":
      coopModal.value = !coopModal.value;
      break;
  }
};
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
