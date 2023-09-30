<template>
  <section
    class="offer-partners container mt-10 lg:mt-20 px-4"
    id="OfferPartners"
  >
    <h1 class="title text-center text-3xl lg:text-6xl font-bold">
      Что мы предлагаем партнерам?
    </h1>

    <div class="flex flex-col lg:flex-row mt-10 lg:mt-20 gap-8 lg:gap-16">
      <div class="card w-full lg:w-3/5" data-aos="fade-up" data-aos-duration="500">
        <h2 class="title_2 font-bold color-primary">
          Достойное вознаграждение
        </h2>
        <p class="text mt-2 lg:mt-4">30% от всех платежей привлеченных клиентов.</p>
        <h2 class="title_2 font-bold color-primary mt-6 lg:mt-8">Актуальный продукт</h2>
        <p class="text mt-2 lg:mt-4">В сфере маркетинга, продаж, автоматизации.</p>
        <h2 class="title_2 font-bold color-primary mt-6 lg:mt-8">
          Обучение и поддержка
        </h2>
        <p class="text mt-2 lg:mt-4">
          Ни один вопрос по сервису не останется без ответа.
        </p>
      </div>

      <div
        class="card offer-partners__wallet  lg:w-2/5"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <h2 class="title_2 font-bold text-white text-right">
          30% от всех платежей
        </h2>
      </div>
    </div>

    <div class="flex mt-10 lg:mt-20 gap-16">
      <div
        class="card offer-partners__schedule hidden lg:flex lg:w-2/5"
        data-aos="fade-up"
        data-aos-duration="500"
      />

      <div class="card w-full lg:w-3/5" data-aos="fade-up" data-aos-duration="500">
        <h2 class="title_2 font-bold color-primary">
          Бонус вашим клиентам
        </h2>
        <p class="text mt-2 lg:mt-4">Чтобы они охотнее регистрировались в сервисе.</p>
        <h2 class="title_2 font-bold color-primary mt-6 lg:mt-8">Маркетинг и продвижение</h2>
        <p class="text mt-2 lg:mt-4">Услуги партнеров мы рекомендуем клиентам.</p>
        <h2 class="title_2 font-bold color-primary mt-6 lg:mt-8">
          Прозрачная статистика
        </h2>
        <p class="text mt-2 lg:mt-4">
          Отчеты по всем вашим клиентам и их платежам.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.offer-partners {
  &__wallet {
    min-height: 350px;
    background-color: #7ef716;
    background-image: url("@/assets/walletGreen.png");
    background-repeat: no-repeat;
    background-size: 60%;
    background-position: bottom left;
  }
  &__schedule {
    background-color: #7ef716;
    background-image: url("@/assets/schedule.png");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: bottom left;
  }
}
</style>