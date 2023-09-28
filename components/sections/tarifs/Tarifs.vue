<template>
  <section class="tarifs container mt-8 px-4 lg:mt-32" id="tarifs">
    <h1 class="title text-center text-4xl lg:text-6xl font-bold">Тарифы</h1>
    <TarifBlock />

    <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 mt-8 lg:mt-12">
      <div
        class="card"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-offset="200"
      >
        <h1 class="title">Что входит в тарифы?</h1>

        <p class="text mt-6 lg:mt-8">
          Интеграция позволяет вашим клиентам осуществлять платежи онлайн с
          использованием платежных карт, электронных кошельков и других
          популярных способов оплаты, обеспечивая им высокий уровень удобства и
          безопасности.
        </p>
      </div>

      <div
        class="card tarifs__wallet-bg"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-offset="200"
      >
        <h1 class="title">Cпособы оплаты</h1>
        <p class="text mt-6 lg:mt-8">
          Ежемесячную подписку можно оплатить с помощью банковской карты. Тарифы
          на 6 и 12 периодов дополнительно можно оплатить с помощью ЮМани,
          Вебмани и Киви кошелька.
        </p>
      </div>
    </div>

    <div
      class="card card__green mt-12"
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-offset="200"
    >
      <h1 class="title">Превышение допустимого количества подписчиков</h1>

      <p class="text mt-6 lg:mt-8">
        Тариф автоматически изменится на следующий по величине. Следующий
        ежемесячный платеж будет сделан уже по измененному большему тарифу. За
        текущий месяц, где было превышение, доплат не будет. Растите спокойно!
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-8 lg:gap-16">
      <div class="flex flex-col">
        <div
          class="card card__green mt-12"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="100"
        >
          <h1 class="title">Есть ли скидки?</h1>

          <p class="text mt-6 lg:mt-8">
            Да. При оплате тарифов на 3, 6 и 12 периодов скидка будет 5%, 15% и
            30%, соответственно. Есть нюанс, если превысить допустимое
            количество подписчиков, то действие тарифа закончится раньше
            оплаченного срока. Аналогично, если подписчиков станет меньше, тогда
            оплаченной суммы хватит на больший срок. Перерасчет делается 1 раз в
            месяц.
          </p>
        </div>

        <div
          class="card mt-12"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="200"
          :style="{ height: isDesktop ? '360px': 'auto' }"
        >
          <h1 class="title">Что входит в тарифы?</h1>

          <p class="text mt-6 lg:mt-8">
            Тарифы зависят только от количества подписчиков. На любом тарифе вы
            получаете все возможности платформы без каких-либо ограничений в
            функциональности.
          </p>
        </div>
      </div>
      <div class="flex flex-col">
        <div
          class="card mt-4 lg:mt-12"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-offset="200"
        >
          <h1 class="title">Можно ли оплатить как юридическое лицо?</h1>

          <p class="text mt-6 lg:mt-8">
            Для юридических лиц доступны тарифы от 5 и 10 тысяч подписчиков при
            оплате на период от года и полугода соответственно.
          </p>
        </div>

        <div
          class="card card__green tarifs__wallet2-bg mt-12"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-offset="200"
        >
          <h1 class="title">Возврат платежа</h1>

          <p class="text mt-6 lg:mt-8">
            Если вы вносили предоплату за несколько периодов вперед, то вы
            можете вернуть оплату за неизрасходованные периоды. Платеж за
            текущий период не возвращается. Но у вас есть бесплатный период,
            чтобы все проверить перед покупкой.
          </p>
        </div>
      </div>
    </div>

    <div class="flex justify-end">
      <div>
        <Button class="px-12 py-4 mt-12">
          <span class="text-3xl">Создать бот</span>
        </Button>
        <div class="mt-4 flex justify-end">
          <a
            href="#"
            class="text cursor-pointer font-bold underline decoration-2"
            >Остались вопросы?</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TarifBlock from "@/components/sections/tarifs/TarifBlock.vue";
import bitrix from "@/assets/company-logos/bitrix.png";

const { isDesktop } = useDevice();
</script>

<style lang="scss" scoped>
.tarifs {
  &__wallet-bg {
    min-height: 350px;
    background: url("@/assets/wallet.png"),
      linear-gradient(116deg, #fafaff 0%, #fff 100.86%);
    background-repeat: no-repeat;
    background-position: right bottom;

    @media (min-width: 640px) {
      min-height: 390px;
    }
  }
  &__wallet2-bg {
    min-height: 440px;
    background: url("@/assets/wallet2.png"),
      linear-gradient(117deg, #7ef716 0%, #d2ffab 100%);
    background-repeat: no-repeat;
    background-position: right bottom;

    @media (min-width: 640px) {
      min-height: 490px;
    }
  }
}
</style>