<template>
  <div class="messager flex justify-end w-2/5">
    <!-- <img :src="robotFull" alt="" class="messager__robot"> -->

    <div class="messager__phone">
      <h1 class="title text-xl text-cl-primary">{{ bot.text }}</h1>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";
import robotFull from '@/assets/robotFull.png';

const props = defineProps({
  bot: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.messager {
  &__phone {
    border-radius: 32px;
    border: 9px solid #C0B2C8;
    background: #D9D9D9;
    width: 337px;
    height: 540px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      background-image: url('@/assets/robotFull.png');
      position: absolute;
      left: -200px;
      background-position: left bottom;
      background-repeat: no-repeat;
      z-index: -1;
    }
  }
}
</style>