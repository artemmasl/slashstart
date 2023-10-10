<template>
  <Modal :open="open" @close="$emit('close')">
    <div class="max-w-full">
      <h3 class="title text-cl-primary text-center">Работа в компании</h3>

      <p class="text mt-4 lg:mt-12">
        Приглашаем Вас присоединиться к нашей команде! 
        <br />
        Мы ценим уникальные навыки и таланты, и готовы предоставить Вам
        возможность развиваться и расти в нашей динамичной компании. Свяжитесь с
        нами, чтобы обсудить ваше будущее у нас!
        <br />
        Укажите в заявке свой опыт работы или прикрепите резюме.
      </p>

      <Input
        placeholder="Ваше имя"
        class="mt-8"
        name="Name"
        v-model="form.name"
      />

      <Input
        name="contact"
        v-model="form.contact"
        placeholder="Ваши контакты (Telegram/Email/Телефон)"
        class="mt-4"
      />

      <Input
        name="about"
        v-model="form.about"
        placeholder="Два слова о себе и предложении"
        class="mt-4"
      />

      <div class="flex justify-end">
        <Button
          text="Отправить"
          class="mt-8 px-8 py-2"
          @click="$emit('close')"
        />
      </div>
    </div>
  </Modal>
</template>

<script setup>
import { defineProps, ref } from "vue";

defineEmits(["close"]);

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});

const form = ref({
  name: "",
  contact: "",
  about: "",
});
</script>
