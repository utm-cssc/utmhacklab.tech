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
  data() {
    return {
      cols: 4,
      items: [
        {
          title: "Course Supplements",
          icon: "course-supplements.svg",
          link: "/resources/courses/",
          desc: "Curated tools resources that supplement UTM course content!"
        },
        {
          title: "Robotics",
          icon: "robotics.svg",
          link: "/resources/robotics/",
          desc:
            "Embedded intelligence is everywhere... Robotics isn't just the future, it's the now!"
        },
        {
          title: "Resume",
          icon: "resume.svg",
          link: "/resources/resume/",
          desc:
            "Learn how to stand out with the first piece of information employers see about you."
        },
        {
          title: "Design",
          icon: "design.svg",
          link: "/resources/design/",
          desc:
            "Often, people think design is about the way things look. That’s just one element of design!"
        },
        {
          title: "Mindset",
          icon: "mindset.svg",
          link: "/resources/mindset/",
          desc:
            "Cultivating a growth mindset can help us overcome limiting beliefs about our capabilities!"
        },
        {
          title: "Curated Collections",
          icon: "collections.svg",
          link: "/resources/collections/",
          desc:
            "The best content from the internet can help you filter the signal from the noise."
        },
        {
          title: "Android Development",
          icon: "android.svg",
          link: "/resources/android/",
          desc:
            "Build apps for phones, tablets, cars and the next billion mobile users on Android!"
        },
        {
          title: "Web Development",
          icon: "web.svg",
          link: "/resources/web/",
          desc:
            "Build sites and apps for the world's open and universal computing platform!"
        },
        {
          title: "Podcasts",
          icon: "podcast.svg",
          link: "/resources/podcasts/",
          desc:
            "Learn on the go with entertaining, informative, and awe-inspiring podcasts!"
        },
        {
          title: "Vue",
          icon: "vue.svg",
          link: "/resources/vue/",
          desc:
            "Develop web applications easily with a community powered javascript framework!"
        },
        {
          title: "Glossary",
          icon: "vue.svg",
          link: "/glossary/",
          desc:
            "Build your vocabulary of technical terminology!"
        },
        
      ]
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
