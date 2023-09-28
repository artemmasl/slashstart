<template>
  <button
    class="button shadow-2xl my-button flex justify-center items-center rounded-lg cursor-pointer relative overflow-hidden"
    :class="`button__type-${type}`"
  >
    <slot>
      <span>{{ text }}</span>
    </slot>
  </button>
</template>

<script setup>
import { computed, defineProps } from "vue";
import logo from "@/assets/logo.svg";

const props = defineProps({
  /* Уровень кнопки 1, 2 */
  type: {
    type: Number,
    default: 1,
  },
  /* Текст */
  text: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.button {
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  transition: 0.5s;
  animation: bouncerino-out 0.5s;

  &__type-1 {
    color: var(--color-text-light);
    background-color: var(--color-primary);
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
      border-color 0.2s ease-in-out;
    &:before {
      background: #ffffff6c;
    }
  }

  &__type-2 {
    background-color: #fff;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
    &:before {
      background: rgba(var(--color-primary--rgb), 0.3);
    }

    /* &:hover {
      box-shadow: 4px 4px 8px 0px rgba(173, 0, 255, 0.45) inset;
    }
    
    &:focus {
      box-shadow: 4px 4px 16px 0px rgba(173, 0, 255, 0.45) inset;
    } */
  }

  &::before {
    content: "";
    position: absolute;
    margin: auto;
    width: 0%;
    height: 0%;
    transition: 0.5s ease-out;
    border-radius: 100% 100% 100% 100%;
    opacity: 0%;
  }
  &:hover:before {
    width: 500px;
    height: 500px;
    transition: 0.5s ease-out;
    border-radius: 0;
    animation: opacity-in 0.7s forwards ease-out;
  }
  &:hover {
    animation: bouncerino-in 0.5s forwards alternate ease-out;
  }
  &:hover:p {
    transform: scale(5);
    transition: 0.7s ease-out;
  }
}

@keyframes bouncerino-in {
  100% {
    transform: scale(1.075);
  }
  70% {
    transform: scale(1.08);
  }
  50% {
    transform: scale(1.075);
  }
  40% {
    transform: scale(1.09);
  }
}

@keyframes bouncerino-out {
  100% {
    transform: scale(1);
  }
  0% {
    transform: scale(1.075);
  }
}

@keyframes opacity-in {
  from {
    opacity: 100%;
  }
  to {
    opacity: 0%;
  }
}
</style>