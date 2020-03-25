<template>
  <a
    @mouseover="hovered = true"
    @mouseleave="hovered = false"
    class="box resource-box"
    :href="link"
    :style="{ background: color}"
  >
    <figure class="resource-icon">
      <img class="icon" :src="`/icons/${iconFileName}`" />
    </figure>
    <transition name="slide-out" mode="out-in">
      <div v-if="!hovered" class="resource-title">{{title}}</div>
    </transition>
    <transition name="slide-in">
      <div v-show="hovered" class="resource-desc">{{desc}}</div>
    </transition>
  </a>
</template>

<script>
export default {
  name: "resources-grid-item",
  props: {
    link: {
      type: String,
      required: true
    },
    iconFileName: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: false,
      default: '#11991c'
    }
  },
  data() {
    return {
      hovered: false
    };
  }
};
</script>

<style scoped>
a {
  text-decoration: none !important;
  min-height: 148px;
}

.row {
  display: flex;
}

.box {
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.02);
  color: #4a4a4a;
  display: block;
  padding: 1.25rem;
}

.box.resource-box {
  max-width: 172px;
  height: 100%;
  transition: all 0.2s ease-in-out;
}

.box.resource-box:hover {
  opacity: 0.75;
}

.resource-icon {
  margin-bottom: 32px;
  display: block;
  position: relative;
  height: 42px;
  width: 42px;
  margin-left: 0px;
}

.icon {
  height: 56px;
  width: 56px;
}

.resource-title {
  font-size: 20px;
  color: #ffffff;
  font-weight: 500;
  max-width: 148px;
  word-wrap: break-word;
  line-height: 1.2em;
  position: absolute;
}

.resource-title-hovered {
  font-size: 16px;
  color: #ffffff;
}

.resource-desc {
  font-size: 14px;
  color: #ffffff;
  font-weight: 300;
  position: absolute;
  max-width: 164px;
}

.slide-out-enter-active {
  transition: all 0.3s ease-out;
}
.slide-out-leave-active {
  transition: all 0.3s ease-out;
}
.slide-out-enter, .slide-out-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-20px);
  opacity: 0;
}

.slide-in-enter-active {
  transition: all 0.3s ease-out;
}
.slide-in-leave-active {
  transition: all 0.3s ease-out;
}

.slide-in-enter,
.slide-in-leave-to {
  /* .slide-fade-leave-active below version 2.1.8 */
  transform: translateX(20px);
  opacity: 0;
}

.slide-in-enter-to,
.slide-in-leave {
  /* .slide-fade-leave-active below version 2.1.8 */
  /* transform: translateX(-20px); */
  opacity: 1;
}
</style>