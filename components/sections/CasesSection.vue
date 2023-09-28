<template>
  <section class="cases container mt-32 text-center"  id="cases">
    <h1 class="title mx-auto text-6xl font-bold"> Кейсы </h1>

    <div class="grid gap-8 grid-cols-4 mt-12">
      <div
        v-for="(el, index) in cases"
        :key="'case' + index"
        class="cases__case"
        :style="`background-image: url(${el.bg})`"
        data-aos="fade-up" 
        :data-aos-duration="500 +(100*index)"
        :data-aos-offset="100 * index"
      >
        <iframe 
          v-if="el.video" 
          width="100%" 
          height="100%" 
          :src="el.video"
          allowfullscreen="allowfullscreen"
        />
        <div
          v-else
          class="p-6"
        >
          <strong class="text text-cl-primary font-bold"> {{ el.title }}</strong>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import case1 from "@/assets/case-1.png";
import case2 from "@/assets/case-2.png";

const cases = [
  { text: '', video: 'https://www.youtube.com/embed/McKyEnaHba0' },
  { text: '', video: 'https://www.youtube.com/embed/NLBqYJBeYfE' },
  { 
    title: 'Посмотрите успешные кейсы компании!',
    text: '',
    bg: case1,
  },
  { text: '', video: 'https://www.youtube.com/embed/ktwzUMV2G4I'  },
  { 
    title: 'Заставь опыт других работать на себя',
    text: '',
    bg: case2,
  },
  { text: '', video: 'https://www.youtube.com/embed/NLBqYJBeYfE'  },
  { text: '', video: 'https://www.youtube.com/embed/NLBqYJBeYfE'  },
];
</script>

<style lang="scss" scoped>
.cases {
  &__case {
    width: 300px;
    height: 300px;
    border-radius: 32px;
    background: #fff;
    box-shadow: 6px 6px 23px 0px rgba(0, 0, 0, 0.25);
    text-align: left;
    overflow: hidden;
  }
}
</style>