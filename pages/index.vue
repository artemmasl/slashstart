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
import MainSection from "@/components/sections/MainSection.vue";
import AboutSections from "@/components/sections/about/AboutSections.vue";
import HeroSection from "@/components/sections/HeroSection.vue";
import MissionSection from "@/components/sections/MissionSection.vue";
import CasesSection from "@/components/sections/CasesSection.vue";
import MesseagerSection from "@/components/sections/messager/MesseagerSection.vue";
import InfoSection from "@/components/sections/InfoSection.vue";
import Possibilities from "@/components/sections/Possibilities.vue";
import Tarifs from "@/components/sections/tarifs/Tarifs.vue";
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
