<template>
  <div id="timer">
    <div class="days">
      <div class="numbers">{{days}}</div>days
    </div>
    <div class="hours">
      <div class="numbers">{{hours}}</div>hours
    </div>
    <div class="minutes">
      <div class="numbers">{{minutes}}</div>minutes
    </div>
    <div class="seconds">
      <div class="numbers">{{seconds}}</div>seconds
    </div>
  </div>
</template>
<script>
export default {
  name: "the-show-countdown",
  mounted() {
    setInterval(this.tick, 1000);
  },
  methods: {
    tick: function() {
      const today = new Date().getTime();
      const theShowDate = new Date("Mar 20, 2020 18:00:00").getTime();
      const diff = theShowDate - today;
      console.log(diff);
      this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((diff % (1000 * 60)) / 1000);
    }
  },
  data: function() {
    return {
      days: "",
      minutes: "",
      hours: "",
      seconds: ""
    };
  }
};
</script>

<style>

.numbers {
  font-family: "Montserrat", sans-serif;
  color: #183059;
  font-size: 4em;
  font-weight: bold;
}

#timer {
  color: #183059;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-size: .7em;
  letter-spacing: 5px;
}

.days, .hours, .minutes, .seconds {
  display: inline-block;
  padding: 20px;
  width: 100px;
  border-radius: 5px;
}
</style>