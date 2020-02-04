<template>
  <div style="width: 400px; display:block; margin:0 auto;">
    <carousel :per-page="1" :center-mode="true" >
      <slide v-for="image in images">
        <img :src="image" />
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide
  },
  props: {
    images: {
      type: Array,
    },
  },
  /*
  mounted () {
    import('vue-carousel').then(module => {
      // Vue.use(module);
      // Vue.component('carousel', module.Carousel);
    });
  }
   */
}
</script>
