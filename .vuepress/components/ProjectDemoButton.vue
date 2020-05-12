<template>
  <a :href="link">
    <button class="em-button">
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

<style scoped>
a {
  text-decoration: none !important;
}

.em-button {
  background: #3eaf7c !important;
}

span {
  color: white;
}
</style>

<style lang="stylus" scoped>
@require '../styles/emuxo.styl';
</style>