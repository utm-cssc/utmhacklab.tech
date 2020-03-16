<template>
  <div>
    <div class="margin-0 columns">
      <div class="column"></div>
      <div class="column mb-0 mt-24 title has-text-centered">{{title}}</div>
      <div class="column"></div>
    </div>
    <div class="margin-0 columns">
      <div v-for="item in items" class="column-centered column">
        <figure class="image is-128x128 mb-12">
          <img :src="`/the-show/assets/${item.image}`" />
        </figure>
        <div class="is-size-5">{{item.text}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "item-row-with-title",
  props: {
    title: {
      type: String
    },
    items: {
      type: Array
    }
  }
};
</script>

<style scoped>
.margin-0 {
  margin: 0px !important;
}

.column-centered {
  flex-direction: column !important;
  display: flex !important;
  align-items: center;
}

.mb-12 {
  margin-bottom: 12px;
}

.mb-0 {
  margin-bottom: 0px !important;
}

.mt-24 {
  margin-top: 24px;
}
</style>



<style scoped lang="scss">
@import "../../node_modules/bulma/bulma.sass";
</style>