<template>
  <Modal :open="open" @close="$emit('close')">
    <div class="max-w-full">
      <h3 class="title text-cl-primary text-center">Предложить интеграцию</h3>

      <p class="text mt-4 lg:mt-12">
        Если вы являетесь владельцем платформы или стремитесь представить новый
        сервис с возможностью интеграции, осознавая его важность для развития
        вашего бизнеса, предлагаем Вам оставить заявку на внедрение новой
        интеграции. Вся представленная информация будет тщательно рассмотрена
        нашей командой.
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

defineEmits(['close'])

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});

const form = ref({
  name: '',
  contact: '',
  about: '',
})
</script>