<template>
  <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto mt-5">
    <h1>Events</h1>
    <grid1x2 />
    <div
      v-for="event of events"
      :key="event.slug"
      class="mb-5"
    >
      <NuxtLink :to="{ name: 'events-slug', params: { slug: event.slug } }">
        <div class="event-card d-flex justify-space-between">
          <div class="flex-col mr-2">
            <h2>{{ event.title }}</h2>
            <p>{{ event.description }}</p>
          </div>
          <img
            class="img-event"
            :src="event.img"
          >
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const events = await $content('events', params.slug)
      .only(['title', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      events
    }
  }
}
</script>

<style scoped>

a {
  text-decoration: none;
}

.event-card {
  border: solid 2px #343434;
  border-radius: 8px;
  padding: 12px 24px;
}

.img-event {
  height: 209px;
}

@media (max-width: 600px) {
  .img-event {
    height: 108px;
  }
}
</style>
