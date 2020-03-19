<template>
  <a :href="link">
    <button class="button is-medium is-rounded">
      <span class="icon">
        <i class="fas fa-book"></i>
      </span>
      <span class="text">Docs</span>
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
  background: #339af1;
}

span {
  color: white;
}
</style>