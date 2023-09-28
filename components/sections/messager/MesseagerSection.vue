<template>
  <div class="section container mt-32">
    <h1 class="title text-6xl text-center font-bold">Чат-боты для разных сфер бизнеса</h1>

    <div class="mt-16 flex">
      <div class="w-3/5">
        <p class="text">
          Посмотрите успешные решения в различных сферах бизнеса и убедитесь
          сами, как чат-боты улучшают клиентское обслуживание и автоматизируют
          задачи.
        </p>

        <div class="mt-12 grid grid-cols-3 gap-8">
          <div
            v-for="(el, i) in messagersBots"
            :key="el.text"
            class="flex flex-col justify-center"
          >
            <img class="card p-0 mx-auto" :src="el.img" :alt="el.text" />
            <Button class="mt-6 mx-auto px-8 py-2" :text="el.text" @click="selectedBotIndex = i"/>
          </div>
        </div>
      </div>

      <MessagerBot :bot="messagersBots[selectedBotIndex]"/>
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

const selectedBotIndex = ref(0)

const messagersBots = [
  { img: restoran, text: "Ресторан" },
  { img: support, text: "Тех. Поддержка" },
  { img: sales, text: "Продажи" },
  { img: autoFunnel, text: "Автоворонка" },
  { img: restoran, text: "Онлайн-обучение" },
  { img: restoran, text: "Сфера услуг" },
];
</script>
