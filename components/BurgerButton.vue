<template>
  <button class="relative group">
    <div
      class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all  ring-opacity-30 duration-200"
    >
      <div
        class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden"
      >
        <div
          class="bg-slate-700 h-[2px] w-7 transform transition-all duration-300 origin-left delay-100"
          :class="{'translate-y-6': isActive}"
        />
        <div
          class="bg-slate-700 h-[2px] w-7 rounded transform transition-all duration-300 delay-75"
          :class="{'translate-y-6': isActive}"
        />
        <div
          class="bg-slate-700 h-[2px] w-7 transform transition-all duration-300 origin-left"
          :class="{'translate-y-6': isActive}"
        />

        <div
          class="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0"
          :class="{'w-12 translate-x-0': isActive}"
        >
          <div
            class="absolute bg-slate-700 h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300"
            :class="{'rotate-45': isActive}"
          />
          <div
            class="absolute bg-slate-700 h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300"
            :class="{'-rotate-45': isActive}"
          />
        </div>
      </div>
    </div>
  </button>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>

</style>
