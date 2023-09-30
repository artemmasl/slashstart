<template>
  <MainSection />
  <AboutSections />
  <MissionSection v-if="isDesktop" />
  <HeroSection />
  <MesseagerSection v-if="isDesktop" />
  <CasesSection v-if="isDesktop" />
  <InfoSection />
  <Possibilities />
  <Tarifs />
</template>

<script setup>
import MainSection from "~/components/sections/index-page/MainSection.vue";
import AboutSections from "@/components/sections/index-page/about/AboutSections.vue";
import HeroSection from "~/components/sections/index-page/HeroSection.vue";
import MissionSection from "~/components/sections/index-page/MissionSection.vue";
import CasesSection from "~/components/sections/index-page/CasesSection.vue";
import MesseagerSection from "@/components/sections/index-page/messager/MesseagerSection.vue";
import InfoSection from "~/components/sections/index-page/InfoSection.vue";
import Possibilities from "~/components/sections/index-page/Possibilities.vue";
import Tarifs from "@/components/sections/index-page/tarifs/Tarifs.vue";
import Footer from "@/components/footer/Footer.vue";

const { isDesktop } = useDevice();
</script>

<style lang="scss" scoped>
.page {
  background-image: url("@/assets/bg.svg");
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transition: opacity 500ms ease-out;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}
</style>
