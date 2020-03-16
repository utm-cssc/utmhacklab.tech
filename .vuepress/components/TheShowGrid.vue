<template>
  <div>
    <div class="columns row" v-for="i in rowCount">
      <div class="column is-one-quater" v-for="j in cols">
        <div v-if="itemExists(i,j)" class="card rounded-card project-box">
          <div class="title has-text-centered">{{ getItem(i,j).name }}</div>
          <div>{{ getItem(i,j).desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "the-show-grid",
  props: {
    cols: {
      type: Number,
      default: 3
    },
    items: {
      type: Array
    }
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
.project-box {
  padding: 12px 20px;
  height: 100%;
  border-radius: 25px !important;
  background-color: rgba(100, 100, 100, 1) !important;
  color: white !important;
}

.row {
  margin: 1em !important;
}

.title {
  font-size: 24px !important;
  color: white !important;
  height: 48px;
}
</style>


<style scoped lang="scss">
@import "../../node_modules/bulma/bulma.sass";
</style>