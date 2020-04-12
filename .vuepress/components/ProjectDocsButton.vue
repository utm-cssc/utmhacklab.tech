<template>
  <a :href="link">
    <button class="em-button">
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

<style scoped>
a {
  text-decoration: none !important;
}

.em-button {
  background: #339af1 !important;
}

span {
  color: white;
}
</style>

<style lang="stylus" scoped>
@require '../styles/emuxo.styl';
</style>