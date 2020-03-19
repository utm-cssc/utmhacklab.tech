<template>
  <a :href="link">
    <button class="button is-medium is-rounded">
      <span class="icon">
        <i class="fas fa-play-circle"></i>
      </span>
      <span class="text">Demo</span>
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

<style scoped>
a {
  text-decoration: none !important;
}

.button {
  background: #3eaf7c;
}

span {
  color: white;
}
</style>