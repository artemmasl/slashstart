<template>
  <Modal :open="open" @close="$emit('close')">
    <div class="max-w-full">
      <h2 class="title text-cl-primary text-center">
        Предложить сотрудничество
      </h2>

      <p class="text mt-4 lg:mt-12">
        Мы приглашаем вас стать ключевой частью нашей процветающей IT-компании.
        <br />
        Совместно мы можем расширить наши горизонты, создавать уникальные
        продукты и открывать новые рынки. Если вы ищете надежного и амбициозного
        партнера в мире информационных технологий, то мы готовы поделиться с
        вами нашей страстью к инновациям.
        <br />
        Свяжитесь с нами и вместе мы начнем строить успешное и долгосрочное
        партнерство.
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
