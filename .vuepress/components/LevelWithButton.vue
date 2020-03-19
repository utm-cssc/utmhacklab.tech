<template>
  <div class="level level-container">
    <!-- Left side -->
    <div class="level-left">
      <a :href="link" v-if="!imageRight">
        <figure class="image">
          <img :src="image" />
        </figure>
      </a>
      <div v-else>
        <div class="is-size-10 desc">{{desc}}</div>
        <a :href="link" class="action-button">
          <button class="button is-link action-button">{{button}}</button>
        </a>
      </div>
    </div>

    <!-- Right side -->
    <div class="level-right">
      <a :href="link" v-if="imageRight">
        <figure class="image">
          <img :src="image" />
        </figure>
      </a>
      <div v-else>
        <div class="is-size-10 desc align-right">{{desc}}</div>
        <a :href="link" class="action-button">
          <button :href="link" class="button is-link action-button right">{{button}}</button>
        </a>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    imageRight: {
      type: Boolean,
      default: true
    },
    image: String,
    desc: String,
    link: String,
    button: String
  }
};
</script>

<style scoped>
.image {
  max-width: 260px;
}

.button.is-link.action-button {
  margin-top: 25px;
  height: 2em;
}
.button.is-link.action-button.right {
  float: right;
}
.button.is-link.action-button:hover {
  text-decoration: none;
  background-color: #378dff;
}
.level-container {
  margin: 15px 0px;
}
.desc {
  margin-top: 12px;
  max-width: 380px;
  /* font-weight: 500; */
}
.align-right {
  text-align: right;
}
a {
  color: #3eaf7c !important;
  font-weight: 500;
  text-decoration: none !important;
}

a.action-button:hover {
  text-decoration: none;
}
</style>


<style scoped lang="scss">
@import "../../node_modules/bulma/bulma.sass";
</style>