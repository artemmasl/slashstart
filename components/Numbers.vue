<template>
  <div class="numbers">
    <span v-for="(number, index) in numbers" :key="index">
      {{ number }}
    </span>
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted } from "vue";

const props = defineProps({
  length: {
    type: Number,
    default: 20,
  },
});

const numbers = ref([]);

const rondomize = () => {
  return Math.floor(Math.random() * 2);
};

onMounted(() => {
  for (let i = 0; i < props.length; i++) {
    numbers.value[i] = rondomize();
  }

  setInterval(() => {
    /* numbers.value = numbers.value.push(rondomize()); */
  }, 1000);
})
</script>

<style lang="scss" scoped>
.numbers {
  font-size: 64px;
  font-weight: 400;
  letter-spacing: -0.96px;
  width: fit-content;
  color: #7ef716;
  opacity: 0.35;
}
</style>
