<template>
  <div class="theme-container">
    <section class="hero is-primary is-fullheight show-bg show-banner">
      <div class="hero-body">
        <div class="container has-text-centered">
          <the-show-nav-bar />

          <img class="show-hero-img" src="/the-show/hero.png" />

          <div id="club-banners" class="section is-small">
            <div class="container">
              <nav class="level">
                <div v-for="society in societies" class="level-item has-text-centered society">
                  <div>
                    <figure class="image is-96x96">
                      <img
                        @click="openSocietySite(society.link)"
                        :src="`/logos/${society.name}.png`"
                      />
                    </figure>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="countdown" class="is-small">
      <the-show-countdown />
    </section>
    <section id="about" class="hero projects-section show-banner">
      <div class="hero-body">
        <div class="container">
          <h1 class="section-title">About</h1>
          <div class="box-style">
            <div class="contests-text-container">
              <p
                class="is-size-5"
              >There’s nothing like the buzz of activity in the Deerfield labs the night a programming assignment is due. It’s impossible to count the number of hours we’ve spent doing problem sets and running test cases, but the time has come to celebrate all our hard work.</p>
              <br />
              <p
                class="is-size-5"
              >Presenting The Show, a six-hour extravaganza dedicated to you, the MCS student community. We’ve got the food, the fun, and the freebies – basically all the necessary ingredients to bring you a night you won’t forget.</p>
              <br />
              <p class="is-size-5">
                Did we mention it’s free? 😝 Make sure you register on
                <a href="https://utmhacklab.tech/the-show/tickets">Eventbrite</a> so we know you’re coming. Plus, the first 100 people that are registered are guaranteed free merch!!
              </p>
              <br />
              <p
                class="is-size-5"
              >The event runs from 6:00pm - Midnight, on March 20th. Don't worry about staying the entire time though, stay as little or as long as you like, just as long as you're having fun! With everything going on, there’s no way you’ll want to leave early!</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="hero show-banner-repeat">
      <section id="competitions" class="hero projects-section show-banner">
        <div class="hero-body">
          <div class="container">
            <h1 class="section-title">Competitions</h1>
            <div class="box-style">
              <div class="contests-text-container">
                <p class="is-size-5">
                  Bring that competitive spirit cause we’ve got great challenges! Every time you win a competition you’ll earn raffle tickets that you can then enter in our raffle giveaways. Check out our
                  <b>PRIZES</b> section below to see what you could win!
                </p>
              </div>
              <div class="project-grid">
                <the-show-grid :items="competitions"></the-show-grid>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>

    <section class="hero show-banner-repeat">
      <section id="workshops" class="hero projects-section show-banner">
        <div class="hero-body">
          <div class="container">
            <h1 class="section-title">Workshops</h1>
            <div class="box-style">
              <div class="contests-text-container">
                <p
                  class="is-size-5"
                >It wouldn’t be a night of the nerds without some learning and what better way than by having workshops! We’ve even got 2 workshops that are led by Google employees themselves!</p>
              </div>
              <div class="project-grid">
                <the-show-grid :items="workshops"></the-show-grid>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>

    <section class="hero show-banner-repeat">
      <section id="activities" class="hero projects-section show-banner">
        <div class="hero-body">
          <div class="container">
            <h1 class="section-title">Activities</h1>
            <div class="box-style">
              <div class="contests-text-container">
                <p
                  class="is-size-5"
                >We’ve got lots of fun games and activities going on throughout the night, so come and unwind!</p>
              </div>
              <div class="project-grid">
                <the-show-grid :items="activities"></the-show-grid>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>

    <section class="hero show-banner-repeat">
      <section id="contests" class="hero projects-section show-banner">
        <div class="hero-body">
          <div class="container">
            <h1 class="section-title">Contests</h1>
            <div class="box-style">
              <div class="contests-text-container">
                <p
                  class="is-size-5"
                >We have Instagram and Discord contests going until the day of The Show so make sure you go check them out! 🎉🥳</p>
              </div>
              <div class="columns row">
                <div class="column is-one-half" v-for="contest in contests">
                  <div class="box has-text-centered contest">
                    <figure class="image is-128x128 mb-12 is-inline-block">
                      <img :src="`/the-show/assets/${contest.image}.png`" />
                    </figure>
                    <div class="is-size-5" v-html="contest.text"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>

    <section class="hero show-banner-repeat">
      <section id="projects" class="hero projects-section show-banner">
        <div class="hero-body">
          <div class="container">
            <h1 class="section-title">Projects</h1>
            <div class="box-style">
              <div class="projects-text-container">
                <span
                  class="is-size-5"
                >Why call it The Show? Cause we’ve got amazing students projects we want to showcase! Your fellow students have been working hard all year long to develop innovative and cool ideas! Walk around our science fair and chat with the developers about their experience working on the project.</span>
              </div>
              <div class="project-grid">
                <the-show-grid :items="projects"></the-show-grid>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>

    <section id="prizes" class="hero show-banner-repeat">
      <section id="prize-title" class="hero">
        <prize-overview />
      </section>
      <section id="premuim-prizes">
        <prize-item-row-with-title
          :items="premiumPrizes"
          title="Premium Pool"
          titleAlignment="left"
          :numberOfPrizes="3"
        />
      </section>
      <section id="gold-prizes">
        <prize-item-row-with-title
          :items="goldPrizes"
          title="Gold Pool"
          titleAlignment="right"
          :numberOfPrizes="6"
        />
      </section>
      <section id="silver-prizes">
        <prize-item-row-with-title
          :items="silverPrizes"
          title="Silver Pool"
          titleAlignment="left"
          :numberOfPrizes="6"
        />
      </section>
      <section id="bronze-prizes">
        <prize-item-row-with-title
          :items="bronzePrizes"
          title="Bronze Pool"
          titleAlignment="right"
          :numberOfPrizes="3"
        />
      </section>

      <div id="club-banners" class="section is-small">
        <div class="container">
          <nav class="level">
            <div v-for="society in societies" class="level-item has-text-centered society">
              <div>
                <figure class="image is-128x128">
                  <img @click="openSocietySite(society.link)" :src="`/logos/${society.name}.png`" />
                </figure>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TheShowCountdown from "./TheShowCountdown";
import ItemRowWithTitle from "./ItemRowWithTitle";
import TheShowGrid from "./TheShowGrid";
import PrizeItemRowWithTitle from "./PrizeItemRowWithTitle";
import PrizeOverview from "./PrizeOverview";
import Level from "./Level";
import TheShowNavBar from "./TheShowNavBar";

export default {
  components: {
    TheShowCountdown,
    ItemRowWithTitle,
    TheShowGrid,
    PrizeItemRowWithTitle,
    PrizeOverview,
    Level,
    TheShowNavBar
  },
  data() {
    return {
      navigationBar: [
        { name: "About", anchor: "#overview" },
        { name: "Activities", anchor: "#overview" },
        { name: "Competition", anchor: "#overview" },
        { name: "Workshop", anchor: "#overview" },
        { name: "Projects", anchor: "#overview" },
        { name: "Prizes", anchor: "#overview" }
      ],
      societies: [
        { name: "wisc", link: "https://www.facebook.com/wiscutm" },
        { name: "dsc", link: "https://utm.developerstudentclubs.ca/" },
        { name: "mcss", link: "https://utmmcss.com" },
        { name: "sam-inverted", link: "https://utmsam.sa.utoronto.ca/" },
        { name: "robotics", link: "https://utmrobotics.com" }
      ],
      premiumPrizes: [
        { text: "Nintendo Switch", image: "nintendo.svg" },
        { text: "Raptors Tickets", image: "pass.svg" },
        { text: "Monitor", image: "monitor.svg" }
      ],
      projects: [
        {
          name: "Arezue",
          desc:
            "We're creating a recruitment app that gives job seekers to get their dream job without facing discrimination."
        },
        {
          name: "MapUTM",
          desc:
            "We're creating a web app to help students find rooms on campus through path routing and 3D visualization."
        },
        {
          name: "Send Foodz",
          desc:
            "We're creating a service that helps grocery retailers donate to-be-discarded but edible produce to nearby food banks."
        },
        {
          name: "ConnectEd",
          desc:
            "We're creating a platform that helps MCSS students connect with other students and discover new projects to collaborate on."
        },
        {
          name: "Your List",
          desc:
            "We're creating a mobile app that allows you to create a shared shopping list for your family or roommates."
        },
        {
          name: "Open Mind",
          desc:
            "We're creating an open standard for organizing learning and research notes using mind maps. "
        },
        {
          name: "UofT Course Tools",
          desc:
            "We're unifying UofT's course data and building useful apps like a timetable planner and a course selection guide."
        }
      ],
      contests: [
        {
          image: "discord_color",
          text:
            "Our Best Meme contest is happening on our <a href='http://discord.gg/fwdHJQa'>Discord Server</a> where the best meme maker wins a <b>Cherry MX Blue Mechanical Keyboard</b> (with 6 color backlit)!"
        },
        {
          image: "instagram-color",
          text:
            "Follow us on Instagram @<a href='https://www.instagram.com/p/B8sYu7CBIH6/'>utmmcss</a> to learn more about how you could win a <b>Google Home Mini</b>!"
        }
      ],
      goldPrizes: [
        { text: "Disney+ ", image: "disneyland.svg" },
        { text: "$50 Uber Credit", image: "uber.svg" },
        { text: "$50 Walmart Credit", image: "walmart.svg" },
        { text: "Drawing Tablet", image: "tablet.svg" },
        { text: "Backpack", image: "backpack.svg" },
        { text: "Headphone", image: "headphones.svg" }
      ],
      silverPrizes: [
        { text: "$20 Steam Credit", image: "steam.svg" },
        { text: "$20 Amazon Credit", image: "amazon.svg" },
        { text: "$20 The Alley Credit", image: "bubble-tea.svg" },
        { text: "$20 Cineplex Credit", image: "cinema.svg" },
        { text: "$20 Uber Credit", image: "uber.svg" },
        { text: "$20 Walmart Credit", image: "walmart.svg" }
      ],
      bronzePrizes: [
        { text: "$10 Steam Credit", image: "steam.svg" },
        { text: "$10 Amazon Credit", image: "amazon.svg" },
        { text: "$10 The Alley Credit", image: "bubble-tea.svg" },
        { text: "$10 Cineplex Credit", image: "cinema.svg" },
        { text: "$10 Uber Credit", image: "uber.svg" },
        { text: "$10 Walmart Credit", image: "walmart.svg" }
      ],
      activities: [
        { name: "Video Games", desc: "We've got Xbox, PS4 and Wii games" },
        {
          name: "Board Games",
          desc:
            "We've got plenty of board games too if video games aren't your thing!"
        },
        {
          name: "Arts & Crafts",
          desc: "Let your creative side show and come pain with the WiSC team"
        },
        {
          name: "Spicy Chip Challenge",
          desc:
            "Think you’ve got what it takes to take on the hottest chip at our spicy chip challenge?"
        },
        {
          name: '"Get Glammed Up"',
          desc:
            "Come get your makeup done by the WiSC girls, they’ll make sure you look stunning for the night"
        },
        {
          name: "Photo Booth",
          desc:
            "Strike a pose and take pictures with fun props at our photo booth so you’ll remember this night for years to come"
        },
        {
          name: "Bingo",
          desc:
            "Grab your bingo cards and see if you can strike off all the items on your card for a chance to win a prize!"
        },
        {
          name: "Juice Pong",
          desc: "You know, Juice Pong. Like Beer Pong but with Juice"
        },
        {
          name: "Cup Stacking",
          desc:
            "Put your reflexes to the test and see how quickly you can stack the cups"
        }
      ],
      competitions: [
        {
          name: "AI Competition",
          desc:
            "Competing in teams of 1-3, in a multiplayer tournament, you’ll be building a bot to command an army of units!"
        },
        {
          name: "Capture The Flag",
          desc:
            "a security capture the flag competition where you will compete with your friends in breaking into computer systems"
        },
        {
          name: "Social Media Scavenger Hunt",
          desc:
            "Put your sleuthing skills to the test for a chance to win some epic prizes with our scavenger hunt!"
        },
        {
          name: "Deer Hunt",
          desc: "Our take on Man Hunt that will span all of DH and MN"
        },
        {
          name: "Drone Racing",
          desc:
            "Battle it out with other students and see which of you can fly your drone around the obstacle course the fastest. The top 2 winners get to KEEP the DRONES!!"
        },
        {
          name: "Chess Tournament",
          desc:
            "Face off against other students and see how far you can get in the tournament. Some of our execs claim to be the best, think you can beat em?"
        },
        {
          name: "Trivia",
          desc:
            "From tricky riddles to mind-boggling questions about cs profs, see how you fare against these challenging trivia questions"
        },
        {
          name: "Poker Tournament",
          desc:
            "Can you keep a poker while you face off against other students in our poker tournament"
        }
      ],
      workshops: [
        {
          name: "The SPRINT Workshop by Google",
          desc:
            "Learn more about SPRINT, an industry-standard process, from a Google Developer first hand!"
        },
        {
          name: "Flutter Workshop by Google",
          desc:
            "Come learn more about Flutter, an open-source UI software development kit from a Google Engineer!"
        },
        {
          name: "Personal Branding Workshop by RBC",
          desc:
            "Learn how to establish a brand for yourself to help you enter the industry!"
        },
        {
          name: "3D Printing Workshop",
          desc:
            "Learn the basics of how 3D printing to works to help you get started on your own 3D printing projects"
        },
        {
          name: "Building Your Own Buzzer",
          desc:
            "Build a buzzer with the Robotics Team and then use that buzzer at our trivia game!"
        },
        {
          name: "Machine Learning Workshop",
          desc: "Learn the basics of Machine Learning with us"
        },
        {
          name: "Crypto Workshop",
          desc: "Learn about emerging topics in cryptography and security"
        }
      ]
    };
  },
  methods: {
    openSocietySite(link) {
      window.open(link);
    }
  }
};
</script>


<style scoped>
#soon {
  padding: 6rem;
}

.projects-section {
  padding: 2em 0;
  background-color: #3eaf7c;
}

.section-title {
  font-size: 42px;
  color: white;
  font-weight: 600;
  margin-bottom: 12px;
}

.box-style {
  border-radius: 25px !important;
  background-color: rgba(70, 70, 70, 1) !important;
  color: white !important;
  padding: 20px !important;
  margin: 0px !important;
}

.inner-box {
  padding: 12px 20px;
  height: 100%;
  border-radius: 25px !important;
  background-color: rgba(100, 100, 100, 1) !important;
  color: white !important;
}

.projects-text-container {
  margin: 2em;
}

.workshops-section {
  padding: 2em 0;
  background-color: #3eaf7c;
}

.workshops-text-container {
  margin: 2em;
}

.contests-text-container {
  margin: 2em;
}

.contest {
  height: 90% !important;
  background-color: rgba(100, 100, 100, 1) !important;
  color: white !important;
  border-radius: 25px !important;
  border-radius: 25px !important;
}

.row {
  margin: 2em !important;
}

.project-grid {
  margin-bottom: 2em !important;
}

.show-overview {
  margin: 0 16em;
  text-align: justify;
}
.icon {
  position: relative;
  left: 40px;
  top: 25px;
  width: 48px;
  height: 48px;
  cursor: pointer;
  z-index: 9999;
  color: white;
}
.grand-prizes-title {
  margin: 0px !important;
}

.grand-prizes-container {
  margin: 0px !important;
}

.grand-prize {
  flex-direction: column !important;
  display: flex !important;
  align-items: center;
}

.grand-prize-image {
  margin-bottom: 12px;
}

.hero-desc-bg {
  background: #8c64e1 !important;
}

.show-details {
  color: white;
  font-weight: bold;
  font-size: 42px;
  text-shadow: white 0px 0px 10px;
}

.show-banner {
  background: url(/the-show/hero-bg.png);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.show-banner-repeat {
  background: url(/the-show/hero-bg-full.png);
  background-size: 100% 35%;
  background-repeat: repeat-y;
}

.show-hero-img {
  animation: bobble 2.5s ease-out infinite;
  width: 80%;
  height: 80%;
}

@keyframes bobble {
  0% {
    transform: translate3d(0px, 0px, 0px);
    animation-timing-function: ease-out;
  }
  25% {
    transform: translate3d(8px, 16px, 0px);
    animation-timing-function: ease-out;
  }
  50% {
    transform: translate3d(0px, 16px, 0px);
    animation-timing-function: ease-out;
  }
  75% {
    transform: translate3d(8px, 0px, 0px);
    animation-timing-function: ease-out;
  }
  100% {
    transform: translate3d(0px, 0px, 0px);
    animation-timing-function: ease-out;
  }
}

/* .show-bg {
  background: url(/the-show/hero-bg.png);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
} */

.society:hover {
  cursor: pointer;
}

.bg-black {
  background: #000000;
}
</style>


<style scoped lang="scss">
@import "../../node_modules/bulma/bulma.sass";
</style>