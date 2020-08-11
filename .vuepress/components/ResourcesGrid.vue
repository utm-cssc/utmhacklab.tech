<template>
  <div class="resources-grid">
    <resources-grid-item
      v-for="item in items"
      :title="item.title"
      :link="item.link"
      :iconFileName="item.icon"
      :desc="item.desc"
      :color="color"
    ></resources-grid-item>
  </div>
</template>

<script>
import ResourcesGridItem from "./ResourcesGridItem";

export default {
  name: "resources-grid",
  components: {
    ResourcesGridItem,
  },
  props: {
    items: {
      type: Array,
    },
    color: {
      type: String,
      required: false,
      default: "#11991c",
    },
  },
};
</script>


<style scoped>
.resources-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>


<style scoped lang="scss">
@import "../../node_modules/bulma/bulma.sass";
</style>
