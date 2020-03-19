<template>
  <a :href="link">
    <button class="button is-medium is-rounded">
      <span class="icon">
        <i class="fab fa-github"></i>
      </span>
      <span>Repo</span>
    </button>
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: "/"
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../node_modules/bulma/bulma.sass";


</style>

<style>
a {
  text-decoration: none !important;
}
</style>