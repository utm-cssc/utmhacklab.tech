<template>
  <div class="columns is-multiline">
    <div v-for="image in images" class="column is-one-quarter-desktop is-half-tablet">
      <div class="card">
        <div class="card-image">
          <figure class="image">
            <img :src="image" alt />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: Array
  }
};
</script>

<style scoped lang="scss">
@import "../../node_modules/bulma/bulma.sass";
</style>