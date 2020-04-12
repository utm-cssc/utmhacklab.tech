<template>
  <a :href="link">
    <button class="em-button">
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

<style lang="stylus" scoped>
@require '../styles/emuxo.styl';
</style>

<style scoped>
a {
  text-decoration: none !important;
}

.em-button {
  background: white !important;
  color: #3c3c3c !important;
  border: solid 0.5px #3c3c3c;
}
</style>

