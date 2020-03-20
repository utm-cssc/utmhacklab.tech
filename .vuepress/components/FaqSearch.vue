<template>
  <div class="search-engines-container">
    <a target="_blank" v-for="engine in searchEngines" :href="getQueryLink(engine.name)" class="mr16">
      <figure class="image is-48x48">
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
          switch(engine) {
              case "Duck Duck Go": {
                  return `https://duckduckgo.com/?q=${this.query}&kp=-1&kl=us-en`
              }
              case "Google": {
                  return `https://duckduckgo.com/?q=${this.query + " g!"}&kp=-1&kl=us-en`
              }
              case "Youtube": {
                  return `https://duckduckgo.com/?q=${this.query + " yt!"}&kp=-1&kl=us-en`
              }
              case "Wolfram": {
                  return `https://duckduckgo.com/?q=${this.query}&kp=-1&kl=us-en`
              }
          }
      }
  },
  data() {
      return {
          searchEngines: [
              {
                  name: "Duck Duck Go",
                  icon:  "ddg.svg"
              },
              {
                  name: "Google",
                  icon:  "google.svg"
              },
              {
                  name: "Youtube",
                  icon:  "youtube.svg"
              },
            //   {
            //       name: "Wolfram",
            //       icon:  "wolfram.svg"
            //   }
          ]
      }
  },
};
</script>

<style>
a {
  text-decoration: none !important;
}

.search-engines-container {
    display: flex;
}
</style>

<style scoped lang="scss">
@import "../../node_modules/bulma/bulma.sass";
</style>