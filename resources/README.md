---
sidebar: false
home: true
heroText: Resources
tagline: The Hacklab creates and curates resources that benefit students academically and professionally.
---

<ResourcesGrid :items="items"/>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Course Supplements",
          icon: "course-supplements.svg",
          link: "/resources/courses/",
          desc: "Curated tools resources that supplement UTM course content!"
        },
        {
          title: "Glossary",
          icon: "glossary.svg",
          link: "/glossary/",
          desc:
            "Build your understanding of technical terminology!"
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
          title: "Docker",
          icon: "docker.svg",
          link: "/resources/docker/",
          desc:
            "Containerize your applications with ease and deploy them anywhere!"
        }, 
        {
          title: "ReactJS",
          icon: "react.svg",
          link: "/resources/react/",
          desc:
            "A JavaScript Library for building dynamic user interfaces"
        },
        {
          title: "React Native",
          icon: "react-native.svg",
          link: "/resources/react-native/",
          desc:
            "A ReactJS framework for writing natively rendered mobile applications for iOS and Android!"
        },
        {
          title: "Rest",
          icon: "rest.svg",
          link: "/resources/rest/",
          desc:
            "A powerful and popular way for clients to communicate with servers!"
        }
      ]
    }
  }
}
</script>