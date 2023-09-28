<template>
  <section class="section hero px-4" id="hero">
    <div class="container">
      <div
        class="card hero__bot flex justify-end"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <div class="flex flex-col lg:w-1/2">
          <h1 class="title text-white">
            Чат-бот работает даже тогда, когда Вы отдыхаете!
          </h1>

          <p class="text text-white mt-4 lg:mt-8">
            С чат-ботом вы экономите время менеджера для более важных задач
          </p>
        </div>
      </div>

      <div class="mt-8 lg:mt-28 flex relative">
        <div
          class="card card__green lg:w-3/5"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div class="flex flex-col">
            <h1 class="title">Постройте автоворонку продаж</h1>

            <ul class="text list-disc ml-5 mt-6 lg:mt-10">
              <li>
                создайте микролендиг <br />
                для представления товара/услуги
              </li>
              <li class="mt-4">настройте бот в мессенджере</li>
              <li class="mt-4">выгружайте контакты в CRM</li>
            </ul>
          </div>
        </div>

        <img
          :src="money"
          class="absolute hidden lg:block right-0 bottom-0 w-2/5"
        />
      </div>

      <div class="mt-8 lg:mt-28 flex justify-end relative">
        <img
          :src="notebook"
          class="absolute hidden lg:block left-0 bottom-0 lg:w-2/5"
        />

        <div class="card lg:w-3/5" data-aos="fade-up" data-aos-duration="500">
          <div class="flex flex-col">
            <h1 class="title text-cl-primary">Сайт по шаблону</h1>

            <p class="text mt-6 lg:mt-10">
              Сделайте свой сайт за 5 минут без необходимости оплачивать домены!
            </p>

            <p class="text mt-4 lg:mt-8">
              Настройте форму обратной связи, чтобы получать заявки от
              потенциальных клиентов.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import tableAndBooks from "@/assets/tableAndBooks.png";
import money from "@/assets/money.png";
import notebook from "@/assets/notebook.png";
</script>

<style lang="scss" scoped>
.hero {
  margin-top: 50px;

  &__bot {
    background-image: linear-gradient(257deg, #9e00ff 35.38%, #fff 145.88%);

    @media (min-width: 640px) {
      background-image: url("@/assets/tableAndBooks.png"),
        linear-gradient(257deg, #9e00ff 35.38%, #fff 145.88%);
      background-repeat: no-repeat;
      background-size: 45%, 100%;
    }
  }
}
</style>
