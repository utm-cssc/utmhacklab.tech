<template>
    <div>
        <div style="padding-bottom:30px"></div>
        <div class="horizontal-grid">
            <span v-for="img in images">
                <img v-if="img.width && img.height" :src="img.src" :width="img.width" :height="img.height" class="image-property">
                <img v-else-if="img.width" :src="img.src" :width="img.width" class="image-property">
                <img v-else-if="img.height" :src="img.src" :height="img.height" class="image-property">
                <img v-else :src="img.src" class="image-property">
            </span>
        </div>
    </div>
</template>

<script>
export default {
  props: {images:Array}
};
</script>

<style scoped>
.horizontal-grid {
    display: inline;
    position:relative;
}
.image-property {
    position:relative;
    padding-right:5px;
}
</style>
