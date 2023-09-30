<template>
  <div class="section container mt-32">
    <h1 class="title text-6xl text-center font-bold">
      Чат-боты для разных сфер бизнеса
    </h1>

    <div class="mt-16 flex">
      <div class="w-3/5">
        <p class="text">
          Посмотрите успешные решения в различных сферах бизнеса и убедитесь
          сами, как чат-боты улучшают клиентское обслуживание и автоматизируют
          задачи.
        </p>
        <p class="text mt-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
          repellendus ad eius sed voluptatem modi quaerat dignissimos! Quam
          voluptas consequatur excepturi a et molestias ea necessitatibus
          perferendis sunt, magni esse eveniet suscipit voluptatum omnis
          pariatur officia ab mollitia quis. Pariatur!
        </p>
        <div class="mt-12 grid grid-cols-3 gap-8">
          <div
            v-for="(el, i) in messagersBots"
            :key="el.text"
            class="flex flex-col justify-center cursor-pointer duration-300"
              @click="selectedBotIndex = i"
          >
            <img class="card p-0 mx-auto duration-300" :class="{ 'shadow-active': selectedBotIndex === i }" :src="el.img" :alt="el.text" />
            <Button
              class="mt-6 mx-auto px-8 py-2"
              :class="{ 'shadow-active': selectedBotIndex === i }"
              :text="el.text"
            />
          </div>
        </div>
      </div>

      <MessagerBot :bot="messagersBots[selectedBotIndex]" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import MessagerBot from "./MessagerBot.vue";
import restoran from "@/assets/robots-icon/restoran.svg";
import support from "@/assets/robots-icon/support.svg";
import sales from "@/assets/robots-icon/sales.svg";
import autoFunnel from "@/assets/robots-icon/autoFunnel.svg";

const selectedBotIndex = ref(0);

const messagersBots = [
  /* { img: restoran, text: "Ресторан" },
  { img: sales, text: "Продажи" }, 
  { img: autoFunnel, text: "Автоворонка" },
  */
  { img: support, text: "Тех. Поддержка" },
  { img: restoran, text: "Онлайн-обучение" },
  { img: restoran, text: "Сфера услуг" },
];
</script>

<style lang="scss" scoped>
.shadow-active {
  box-shadow: 1px 1px 24px 1px rgb(158 0 255 / 62%);
}
</style>
