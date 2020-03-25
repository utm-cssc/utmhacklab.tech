<template>
  <div>
    <div class="columns row" v-for="i in rowCount">
      <div class="column resources-grid-column" v-for="j in cols">
        <resources-grid-item
          v-if="itemExists(i,j)"
          :title="getItem(i,j).title"
          :link="getItem(i,j).link"
          :iconFileName="getItem(i,j).icon"
          :desc="getItem(i,j).desc"
          :color="color"
        ></resources-grid-item>
      </div>
    </div>
  </div>
</template>

<script>
import ResourcesGridItem from "./ResourcesGridItem";

export default {
  name: "resources-grid",
  components: {
    ResourcesGridItem
  },
  props: {
    items: {
      type: Array,
    },
    color: {
      type: String,
      required: false,
      default: '#11991c'
    }
  },
  data() {
    return {
      cols: 4
    };
  },
  computed: {
    rowCount() {
      const quotient = Math.floor(this.items.length / this.cols);
      const remainder = this.items.length % this.cols;
      return quotient + (remainder === 0 ? 0 : 1);
    }
  },
  methods: {
    itemIndex: function(row, col) {
      return (row - 1) * this.cols + (col - 1);
    },
    getItem: function(row, col) {
      return this.items[this.itemIndex(row, col)];
    },
    itemExists: function(row, col) {
      return this.getItem(row, col) != null;
    }
  }
};
</script>


<style scoped>
.resources-grid-column {
  width: 31%;
  margin-bottom: 36px;
}
</style>


<style scoped lang="scss">
@import "../../node_modules/bulma/bulma.sass";
</style>
