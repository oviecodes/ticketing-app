<template>
  <div class="home">
    <h1 class="text-center text-xl mb-3 font-bold mt-4">Upcoming Events</h1>

    <div class="flex self-center justify-center">
      <event-list class="w-5/6" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventList from "../components/EventList.vue";

export default {
  name: "Home",
  components: {
     EventList,
  },
};
</script>
