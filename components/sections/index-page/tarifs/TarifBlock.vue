<template>
  <div class="tarif mt-4 lg:mt-16">
    <p class="text">Выберите ожидаемое количество подписичиков</p>

    <div class="tarif__subscribers flex-wrap justify-center mt-6 lg:mt-8">
      <div
        v-for="tarif in tarifs"
        :key="'subscribers' + tarif"
        :class="{
          'tarif__subscriber-item_active':
            tarif.subscribers === activeTarif.subscribers,
        }"
        class="tarif__subscriber-item text-center"
        @click="activeTarif = tarif"
      >
        <span class="text text-white">
          {{ numberFormat(tarif.subscribers) }}
        </span>
      </div>
    </div>

    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-12 mt-12 lg:mt-16">
      <div v-if="activeTarif.yPrice" class="price-card">
        <div class="flex price-card__header">
          <span class="text text-white text-center">Год</span>
        </div>

        <div
          class="flex flex-col items-center justify-center h-full py-4 lg:p-0"
        >
          <div class="text flex items-center">
            <span class="color-green text-xl lg:text-4xl font-semibold">
              {{ activeTarif.yPrice.month }} ₽</span
            >
            <span class="text-xs lg:text-xl ml-2">/ месяц</span>
          </div>
          <span class="mt-2 text text-md lg:text-xl"
            >{{ activeTarif.yPrice.value }} ₽ / год</span
          >

          <Button text="Подключиться" class="px-2 py-2 mt-6 lg:px-8 lg:mt-4" />
        </div>
      </div>

      <div v-if="activeTarif.sPrice" class="price-card">
        <div class="flex price-card__header">
          <span class="text text-white text-center">Полугодие</span>
        </div>

        <div
          class="flex flex-col items-center justify-center h-full py-4 lg:p-0"
        >
          <div class="text flex items-center">
            <span class="color-green text-xl lg:text-4xl font-semibold"
              >{{ activeTarif.sPrice.month }} ₽</span
            >
            <span class="text-xs lg:text-xl ml-2">/ месяц</span>
          </div>
          <span class="mt-2 text text-md lg:text-xl"
            >{{ activeTarif.sPrice.value }} ₽ / 6 мес</span
          >

          <Button text="Подключиться" class="px-2 py-2 mt-6 lg:px-8 lg:mt-4" />
        </div>
      </div>

      <div v-if="activeTarif.qPrice" class="price-card">
        <div class="flex price-card__header">
          <span class="text text-white text-center">Квартал</span>
        </div>

        <div
          class="flex flex-col items-center justify-center h-full p-4 lg:p-0"
        >
          <div class="text flex items-center">
            <span class="color-green text-xl lg:text-4xl font-semibold"
              >{{ activeTarif.qPrice.month }} ₽</span
            >
            <span class="text-xs lg:text-xl ml-2">/ месяц</span>
          </div>
          <span class="mt-2 text text-md lg:text-xl"
            >{{ activeTarif.qPrice.value }} ₽ / 3 мес</span
          >

          <Button text="Подключиться" class="px-2 py-2 mt-6 lg:px-8 lg:mt-4" />
        </div>
      </div>

      <div class="price-card h-auto">
        <div class="flex price-card__header">
          <span class="text text-white text-center">Месяц</span>
        </div>

        <div
          class="flex flex-col items-center justify-center h-full py-4 lg:p-0"
        >
          <span class="text text-center mb-4">{{
            activeTarif.mPrice.value
          }}</span>
          <div class="text flex items-center">
            <span class="color-green text-xl lg:text-4xl font-semibold"
              >{{ activeTarif.mPrice.month }} ₽</span
            >
            <span class="text-xs lg:text-xl ml-1">/ месяц</span>
          </div>
          <Button
            text="Подключиться"
            class="px-2 py-2 mt-12 lg:px-8"
            :class="activeTarif.mPrice.value ? 'mt-4' : 'mt-12'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

/* sPrice - полгода */
const tarifs = [
  {
    subscribers: 1000,
    mPrice: { month: 1500 },
    qPrice: { month: 1425, value: 4275 },
    sPrice: { month: 1275, value: 7650 },
    yPrice: { month: 1050, value: 12600 },
  },
  {
    subscribers: 3000,
    mPrice: { month: 2700 },
    qPrice: { month: 2565, value: 7695 },
    sPrice: { month: 2295, value: 13770 },
    yPrice: { month: 1890, value: 22680 },
  },
  {
    subscribers: 5000,
    mPrice: { month: 3300 },
    qPrice: { month: 3135, value: 9405 },
    sPrice: { month: 2805, value: 16830 },
    yPrice: { month: 2310, value: 22680 },
  },
  {
    subscribers: 10000,
    mPrice: { month: 6000 },
    qPrice: { month: 5700, value: 17100 },
    sPrice: { month: 5100, value: 30600 },
    yPrice: { month: 4200, value: 50400 },
  },
  {
    subscribers: 15000,
    mPrice: { month: 8200 },
    qPrice: { month: 7790, value: 23370 },
    sPrice: { month: 6970, value: 41820 },
    yPrice: { month: 5740, value: 68880 },
  },
  {
    subscribers: 20000,
    mPrice: { month: 10100 },
    qPrice: { month: 9595, value: 28785 },
    sPrice: { month: 8585, value: 51510 },
    yPrice: { month: 7070, value: 84840 },
  },
  {
    subscribers: 50000,
    mPrice: { month: 20200 },
    qPrice: { month: 9595, value: 28785 },
    sPrice: { month: 17170, value: 51510 },
    yPrice: { month: 14140, value: 169680 },
  },
  {
    subscribers: 100000,
    mPrice: { month: 30000 },
    qPrice: { month: 28500, value: 85500 },
    sPrice: { month: 25500, value: 153000 },
    yPrice: { month: 21000, value: 252000 },
  },
  {
    subscribers: "150 000+",
    mPrice: { month: 40000, value: "Индивидуальные условия" },
  },
];

const activeTarif = ref(tarifs[0]);

const numberFormat = (value) => {
  if (typeof value === "number") {
    return new Intl.NumberFormat("ru-RU").format(value);
  }

  return value;
};
</script>

<style lang="scss" scoped>
.tarif {
  &__subscribers {
    display: flex;
    width: fit-content;
    border-radius: 12px;
    background-color: rgba(var(--color-primary--rgb), 0.3);
    padding: 8px;
  }

  &__subscriber-item {
    padding: 8px 16px;
    min-width: 100px;
    opacity: 0.3;
    cursor: pointer;
    border-radius: 12px;

    &_active {
      opacity: 1;
      background: var(--color-primary);
    }
  }
}

.price-card {
  display: flex;
  flex-direction: column;
  border-radius: 32px;
  background: linear-gradient(116deg, #fafaff 0%, #fff 100.86%);
  overflow: hidden;
  position: relative;
  box-shadow: 6px 6px 23px 0px rgba(0, 0, 0, 0.25);

  @media (min-width: 640px) {
    height: 270px;
  }

  &__header {
    border-radius: 32px 32px 0 0;
    width: 100%;
    padding: 8px;
    justify-content: center;
    background: linear-gradient(109deg, #9e00ff 6.21%, #fff 280.9%);
  }
}
</style>
