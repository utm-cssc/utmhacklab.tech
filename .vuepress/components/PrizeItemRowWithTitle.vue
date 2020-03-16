<template>
  <div class="container-size container">
    <div>
      <div :class="`column mb-0 mt-24 title has-text-${titleAlignment}`">{{title}}</div>
    </div>
    <div class="box prize-box">
      <div class="margin-0 columns">
        <div v-for="item in items" class="column-centered column">
          <figure class="image is-128x128 mb-12">
            <img :src="`/the-show/assets/${item.image}`" />
          </figure>
          <div class="is-size-5 white-color has-text-centered">{{item.text}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "prize-item-row-with-title",
  props: {
    title: {
      type: String
    },
    items: {
      type: Array
    },
    titleAlignment: {
      type: String
    },
    numberOfPrizes: {
      type: Number
    }
  }
};
</script>

<style scoped>
.container-size {
  width: 90% !important;
}

.white-color {
  color: white;
}

.title {
  color: white !important;
}
.prize-box {
  border-radius: 25px !important;
  background-color: rgba(70, 70, 70, 1) !important;
}

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

.circle {
  width: 160px;
  height: 160px;
  background: white;
  border-radius: 80px;
}
</style>



<style scoped lang="scss">
@import "../../node_modules/bulma/bulma.sass";
</style>