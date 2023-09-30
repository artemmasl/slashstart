<template>
  <Teleport to="#modals">
    <transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200 transform"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-show="open" class="fixed w-full h-full z-10 flex">
        <div
          class="absolute bg-black opacity-70 inset-0"
        ></div>
        <div
          class="max-w-4xl relative mx-4 lg:mx-auto my-auto card"
        >
          <slot />
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
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
