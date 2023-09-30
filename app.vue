<template>
  <!-- Контейнер для телепорта модалок -->
    <TransitionGroup name="fade" id="modals" tag="div">

    </TransitionGroup>
  <div class="page">
    <Header />

      <NuxtPage />
      
    <Footer />
  </div>
</template>

<script setup>
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
