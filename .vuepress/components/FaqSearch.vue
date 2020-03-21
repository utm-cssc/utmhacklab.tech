<template>
  <div class="search-engines-container">
    <transition name="fade">
      <div v-show="hovered" class="query-container">
        <span class="mr8">{{query}}</span>
        <i class="fas fa-search mr24 mt8" />
      </div>
    </transition>
    <a
      target="_blank"
      v-for="engine in searchEngines"
      :href="getQueryLink(engine.name)"
      class="mr36"
      @mouseover="hovered=true"
      @mouseleave="hovered=false"
    >
      <figure class="image is-36x36">
        <img class="icon" :src="`/icons/${engine.icon}`" />
      </figure>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    query: {
      type: String,
      default: ""
    }
  },
  methods: {
    getQueryLink(engine) {
      switch (engine) {
        case "Duck Duck Go": {
          return `https://duckduckgo.com/?q=${this.query}&kp=-1&kl=us-en`;
        }
        case "Google": {
          return `https://duckduckgo.com/?q=${this.query +
            " g!"}&kp=-1&kl=us-en`;
        }
        case "Youtube": {
          return `https://duckduckgo.com/?q=${this.query +
            " yt!"}&kp=-1&kl=us-en`;
        }
        case "Wolfram": {
          return `https://duckduckgo.com/?q=${this.query +
            " wa!"}&kp=-1&kl=us-en`;
        }
      }
    }
  },
  data() {
    return {
        hovered: false,
      searchEngines: [
        {
          name: "Duck Duck Go",
          icon: "ddg.svg"
        },
        {
          name: "Google",
          icon: "google.svg"
        },
        {
          name: "Youtube",
          icon: "youtube.svg"
        },
        {
          name: "Wolfram",
          icon: "wolfram.svg"
        }
      ]
    };
  }
};
</script>

<style>
a {
  text-decoration: none !important;
}

.search-engines-container {
  display: inline-flex;
  margin-left: 24px;
  float: right;
}

.is-36x36 {
  width: 36px;
  height: 36px;
}

.query-container {
  color: #6a8bad;
  font-size: 0.96rem;
  /* transition: opacity 0.3s ease-out; */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<style scoped lang="scss">
@import "../../node_modules/bulma/bulma.sass";
</style>