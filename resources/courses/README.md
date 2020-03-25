---
sidebar: false
home: true
heroText: UTM Courses
tagline: We encourage students to supplement the learning materials from class with resources from the wider internet.
---

<ResourcesGrid :items="courses" color="#103667"/>

<script>
export default {
  data() {
    return {
      courses: [
        {
          title: "CSC358",
          icon: "course-supplements.svg",
          link: "/resources/csc358/",
          desc: "Principles of Computer Networks"
        },
      ]
    }
  }
}
</script>
