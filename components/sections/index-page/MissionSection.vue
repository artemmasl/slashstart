<template>
  <section class="mission hidden lg:flex container" id="mission">
    <div class="mission__cards-container flex">
      <div class="mission__card z-30">
        <span class="mission__card-number">1</span>
        <h2 class="title text-white">Наша миссия</h2>

        <p class="text text-white mt-10">
          Миссия нашего конструктора чат-ботов вдохновлена желанием сделать инновационные технологии доступными каждому. Мы стремимся предоставить инструмент, который позволит всем – от предпринимателей до творческих мечтателей – воплотить свои идеи в жизнь без необходимости в технических навыках.
        </p>
      </div>

      <div class="mission__card z-20 aos-item" data-aos-mirror="true" data-aos-offset="300"  data-aos="fade-right" style="margin-left: -30px">
        <span class="mission__card-number">2</span>

        <p class="text text-white" style="margin-top: 5.5rem">
          Мы верим, что будущее должно быть доступно для каждого, и поэтому мы поставили перед собой задачу предоставить коробочные решения и готовые шаблоны для создания чат-ботов. Мы хотим сделать процесс создания и настройки чат-ботов таким же простым, как составление пазла. Наша платформа позволяет автоматизировать каждый этап этого процесса – от начальной идеи до полноценного функционирующего бота.
        </p>
      </div>

      <div class="mission__card z-10" data-aos="fade-right" data-aos-offset="600" style="margin-left: -30px">
        <span class="mission__card-number">3</span>


        <p class="text text-white" style="margin-top: 5.5rem">
          <strong>
            Разве это не круто? 
          </strong>
        </p>

        <p class="text text-white mt-8">
          Мы верим, что будущее должно быть доступно для каждого, и поэтому мы поставили перед собой задачу предоставить коробочные решения и готовые шаблоны для создания чат-ботов. Мы хотим сделать процесс создания и настройки чат-ботов таким же простым, как составление пазла. Наша платформа позволяет автоматизировать каждый этап этого процесса – от начальной идеи до полноценного функционирующего бота.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.mission {
  margin-top: 96px;

  &__card {
    padding: 48px 94px 64px 48px;
    border-radius: 32px;
    background: var(--linear, linear-gradient(131deg, #9E00FF 2.4%, #C76CFF 79.73%));
    width: 35%;
    position: relative;
  }

  &__card-number {
    font-family: Inter;
    font-size: 128px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    letter-spacing: -1.92px;
    color: #fff;
    position: absolute;
    right: 57px;
    top: 16px;
    opacity: 0.1;
  }
}
</style>