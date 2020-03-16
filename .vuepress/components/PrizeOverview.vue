<template>
  <div class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="prizes-title">Prizes</h1>
        <div class="box-style">
          <span>Did we mention we’re also giving away a ton of great prizes~ 🎁🥳🙌</span>
          <div id="grandRaffle" class="mt">
            <h3 class="title title-margin is-4">Grand Raffle</h3>
            <span>
              Throughout the night we'll be handing out tickets for our raffle to draw from the
              <b>
                <span class="show-pink">Premium Prize Pool</span>
              </b>! To increase your chances of winning you can . . .
            </span>
            <div class="level mt">
              <div v-for="item in grandRaffle" class="level-item has-text-centered inner-box-1">
                <div class="grand-raffle-bubble">
                  <div v-html="item.ptext" />
                  <div class="tickets" v-html="item.tickets" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="columns mt">
          <div class="column is-three-fifths">
            <div id="competitions" class="box-style">
              <h3 class="title title-margin is-4">Competition Prizes</h3>
              <span>Winners of each competition will randomly draw from our Prize Pools and receive additional raffle tickets based on placement.</span>
              <div class="level mt">
                <div class="level-item has-text-centered">
                  <div class="box inner-box-2">
                    <p class="title is-4">1st Place</p>
                    <p class="tickets">🎟️🎟️</p>
                    <p class="tickets">+</p>
                    <p>
                      Random
                      <b>
                        <span class="show-pink">Gold Prize</span>
                      </b>
                    </p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div class="box inner-box-2">
                    <p class="title is-4">2nd Place</p>
                    <p class="tickets">🎟️🎟️🎟️</p>
                    <p class="tickets">+</p>
                    <p>
                      Random
                      <b>
                        <span class="show-blue">Silver Prize</span>
                      </b>
                    </p>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div class="box inner-box-2">
                    <p class="title is-4">3rd Place</p>
                    <p class="tickets">🎟️🎟️🎟️🎟️</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div id="throughoutNight" class="box-style">
              <h3 class="title title-margin is-4">Prizes Throughout the Night</h3>
              <span>
                Winners of Juice Pong, Bingo, Cup Stacking and Social Media Scavenger Hunt will randomly draw from our
                <b>
                  <span class="show-purple">Bronze Prize Pool.</span>
                </b>
              </span>
              <div class="level mt">
                <div class="level-item has-text-centered">
                  <div class="box inner-box-2">
                    <p class="title is-4">Winner</p>
                    <p>
                      Random
                      <b>
                        <span class="show-purple">Bronze Prize</span>
                      </b>
                    </p>
                    <p>&nbsp;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "prize-overview",
  props: {},
  data() {
    return {
      grandRaffle: [
        { ptext: "<b>Demo at<br />Science Fair</b>", tickets: "🎟️🎟️🎟️🎟️🎟️" },
        { ptext: "<b>Checkout a<br />Project</b>", tickets: "🎟️" },
        { ptext: "<b>Attend a<br />Workshop</b>", tickets: "🎟️🎟️" },
        { ptext: "<b>Attend a<br />Competition</b>", tickets: "🎟️" },
        { ptext: "<b>Attend an<br />Activity</b>", tickets: "🎟️" }
      ]
    };
  }
};
</script>

<style scoped>
.prizes-title {
  font-size: 42px;
  color: white;
  font-weight: 600;
  margin-bottom: 12px;
}

.grand-raffle-bubble {
  margin-top: 8px;
  font-size: 1.5em;
}

.tickets {
  font-size: 2em;
}

.box-style {
  border-radius: 25px !important;
  background-color: rgba(70, 70, 70, 1) !important;
  color: white !important;
  padding: 20px !important;
  margin: 0px !important;
}

p {
  color: white !important;
  margin: 10px !important;
}

span {
  font-size: 18px;
}

.mt {
  margin-top: 1rem !important;
}

.column-spacing {
  padding: 0px !important;
  margin-bottom: -12px !important;
}

.show-blue {
  color: #00f9ff;
}

.show-purple {
  color: rgba(140, 100, 255, 1);
}

.show-pink {
  color: rgba(255, 179, 221, 1);
}

.title {
  color: white !important;
}

.title-margin {
  margin-top: 6px !important;
  margin-bottom: 12px !important;
}

.inner-box-1 {
  border-radius: 20px !important;
  background-color: rgba(255, 255, 255, 1) !important;
  background-color: rgba(100, 100, 100, 1) !important;
  margin: 12px !important;
  padding: 0px 12px;
  height: 90%;
  max-width: 244px;
}

.inner-box-2 {
  border-radius: 20px !important;
  background-color: rgba(255, 255, 255, 1) !important;
  background-color: rgba(100, 100, 100, 1) !important;
  height: 90%;
}
</style>



<style scoped lang="scss">
@import "../../node_modules/bulma/bulma.sass";
</style>