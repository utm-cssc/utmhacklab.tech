<template>
  <nav
    class="navbar box navigation-bar the-show-nav"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item">
          <a
            href="https://www.eventbrite.ca/e/the-show-a-night-of-the-nerds-tickets-93866562415"
            class="title white-text"
          >
            <figure class="image is-48x48 tickets-icon">
              <img src="/icons/tickets.svg" />
            </figure>GET TICKETS
          </a>
        </div>
      </div>
      <div class="navbar-end">
        <div v-for="link in navigationBar" class="navbar-item">
          <a :href="link.anchor" class="white-text">{{link.name}}</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "the-show-nav-bar",
  data: function() {
    return {
      navigationBar: [
        { name: "About", anchor: "#about" },
        { name: "Competitions", anchor: "#competitions" },
        { name: "Workshops", anchor: "#workshops" },
        { name: "Activities", anchor: "#activities" },
        { name: "Contests", anchor: "#contests" },
        { name: "Projects", anchor: "#projects" },
        { name: "Prizes", anchor: "#prizes" }
      ]
    };
  }
};
</script>

<style scoped>
.the-show-nav {
  padding: 0.2rem 1.25rem !important;
}

.tickets-icon {
  margin-right: 8px;
}

a {
  display: flex;
  font-size: 18px;
}
.navigation-bar {
  border-radius: 25px !important;
  background-color: rgba(47, 47, 47, 0.75) !important;
  border-bottom: none;
}

@media screen and (max-width: 1024px) {
  .navigation-bar {
    visibility: hidden !important;
  }
}

@media screen and (min-width: 1024px) {
  .navigation-bar {
    visibility: visible !important;
  }
}

.white-text {
  color: white !important;
}
</style>


<style scoped lang="scss">
@import "../../node_modules/bulma/bulma.sass";
</style>