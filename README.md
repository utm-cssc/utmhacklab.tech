---
home: true
heroText: UTM Hacklab
heroImage: /logos/hacklab.png
tagline: Supporting UTM MCS Students
features:
- title: 🏫 Office Space and Guidance
  details: The Hacklab provides a space for students at UTM with guidance on their academic and professional roadmaps by students from the community. 
- title: 🔎 Research and Development
  details: We R&D creative processes and tools for the student community to succeed. 
- title: 🌲 Supporting MCS societies
  details: The Hacklab provides space and resources for MCS clubs that serve particular student needs and concerns.   
footer: UTM Hacklab DH2014
--- 

# What is the Hacklab?

The UTM Hacklab is an MCS department initiative made for the students of UTM. We're located in room 2014 in UTM's Deerfield Hall building. 

## A collaborative project space

Projects are an important component of a student candidate's evaluation package because technology companies are looking for students that:

- Have experienced the exploratory self-initiated nature of working on real world projects
- Have exposed themselves to similar processes and technologies involved in building projects in the industry. 

## We research and develop for the student community

Hacklab coordinators and members R&D processes and technologies that help students succeed academically and professionally.

With the interest of students in mind, we curate resources from around the internet and produce original content. 

<ResourcesGrid :items="items"/>

## The support wing for MCS societies

The UTM MCS community is home to a number of clubs that the Hacklab supports logistically and technically.

Learn more about the clubs available to you [here](/clubs)


## How do I join the Hacklab?


The Hacklab is still setting up its near to long term infrastructure. 

At the moment, the best ways to get involved are:

- [Join](/hl-roles) Our Team
- Joining our digital communities on [Discord](https://discord.gg/gPX54wF) or  [Microsoft Teams](https://teams.microsoft.com/l/team/19%3a9a293cfeb0d44967babe95ceaeff8fe2%40thread.skype/conversations?groupId=2dba53aa-e8b2-4a9b-a206-92677860a263&tenantId=78aac226-2f03-4b4d-9037-b46d56c55210)
- Contributing to this website. [Learn how!](/contributing)
- Engaging with us in person by visiting our office at UTM in Deerfield Hall Room 2014. We'll be posting our office hours for the upcoming term soon!

::: tip don't be shy

If you come visit us in person when our doors are open, we'll do our best to ensure that you are heard :slightly_smiling_face:
:::

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
      ]
    }
  }
}
</script>