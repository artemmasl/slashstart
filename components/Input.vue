<template>
  <input
    type="text"
    :id="name"
    :name="name"
    :value="modelValue"
    :placeholder="placeholder"
    @change="(value) => $emit('model-value: update', value)"
    class="px-4 py-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-purple-500 focus:ring-purple-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
  />
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  name:  { type: String, default: '' },
  modelValue: { type: String, required: true },
  placeholder:  { type: String, default: '' },
});
</script>

<style lang="scss" scoped>
.input {

}
</style>
