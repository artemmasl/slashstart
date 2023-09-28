<template>
  <section class="possibilities container mt-10 lg:mt-20 px-4" id="possibilities">
    <h1 class="title text-center text-3xl lg:text-6xl font-bold">
      Дополнительные возможности
    </h1>
    <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 mt-10 lg:mt-20">
      <div
        class="card"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-offset="200"
      >
        <div class="flex items-center">
          <img class="w-12 lg:w-auto" :src="bitrix" alt="Bitrix" />
          <h1 class="title ml-4">Битрикс24</h1>
        </div>

        <p class="text mt-6 lg:mt-12">
          Автоматический обмен данными между чат-ботом и CRM-системой устраняет
          необходимость вручную вносить информацию, сокращая рутинные операции и
          позволяя сотрудникам сосредотачиваться на более важных задачах.
        </p>
      </div>

      <div
        class="card"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-offset="200"
      >
        <div class="flex items-center">
          <img class="w-12 lg:w-auto" :src="bizon" alt="Бизон 365" />
          <h1 class="title ml-4">Бизон 365</h1>
        </div>

        <p class="text mt-6 lg:mt-12">
          Пользователи могут регистрироваться на вебинары, а также получать
          напоминания и уведомления о предстоящих мероприятиях через чат-бота.
          Это упрощает процесс участия и повышает вероятность активной
          аудитории.
        </p>
      </div>

      <div
        class="card"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-offset="200"
      >
        <div class="flex items-center">
          <img class="w-12 lg:w-auto" :src="getcourse" alt="Getcourse" />
          <h1 class="title ml-4">Getcourse</h1>
        </div>

        <p class="text mt-6 lg:mt-12">
          Автоматический обмен данными между чат-ботом и CRM-системой устраняет
          необходимость вручную вносить информацию, сокращая рутинные операции и
          позволяя сотрудникам сосредотачиваться на более важных задачах.
        </p>
      </div>

      <div
        class="card"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-offset="200"
      >
        <div class="flex items-center">
          <img class="w-12 lg:w-auto" :src="youmoney" alt="ЮMoney" />
          <h1 class="title ml-4">ЮMoney</h1>
        </div>

        <p class="text mt-6 lg:mt-12">
          Интеграция позволяет вашим клиентам осуществлять платежи онлайн с
          использованием платежных карт, электронных кошельков и других
          популярных способов оплаты, обеспечивая им высокий уровень удобства и
          безопасности.
        </p>
      </div>
    </div>

    <div
      class="card mt-8 lg:mt-12"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="200"
    >
      <div class="flex items-center">
        <img class="w-8 lg:w-max" :src="telega" alt="telega" />
        <img class="w-8 ml-2 lg:w-max" :src="insta" alt="insta" />
        <img class="w-8 ml-2 lg:w-max" :src="vk" alt="vk" />
        <h1 class="title ml-2 lg:w-max">Мессенджеры</h1>
      </div>

      <p class="text mt-6 lg:mt-12">
        Интеграция позволяет вашим клиентам осуществлять платежи онлайн с
        использованием платежных карт, электронных кошельков и других популярных
        способов оплаты, обеспечивая им высокий уровень удобства и безопасности.
      </p>
    </div>

    <div class="flex justify-center">
      <Button
        class="mt-6 lg:mt-12 px-8 py-4 mx-auto"
      >
        <span class="text">Предложите свою Интеграцию</span>
      </Button>
    </div>
  </section>
</template>

<script setup>
import bitrix from "@/assets/company-logos/bitrix.png";
import bizon from "@/assets/company-logos/bizon.png";
import getcourse from "@/assets/company-logos/getcourse.png";
import youmoney from "@/assets/company-logos/youmoney.png";
import vk from "@/assets/company-logos/vk.svg";
import insta from "@/assets/company-logos/insta.svg";
import telega from "@/assets/company-logos/telega.svg";
</script>

<style lang="scss" scoped>
.possibilities {
}
</style>