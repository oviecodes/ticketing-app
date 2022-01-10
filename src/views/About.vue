<template>
  <div class="about">
    <event-view />
  </div>
</template>

<script>
import EventView from "../components/EventView.vue";
// import EventView from "../components/EventView.vue";

export default {
  name: "About",
  components: {
    EventView,
    // EventView
  },
};
</script>

<style scoped>
.show_case {
  /* background: rgba(0, 0, 0, 0.5); */
  /* background-blend-mode: multiply; */
  background-repeat: no-repeat;
  background-size: cover;
}

.show_img {
  object-fit: cover;
  opacity: 1;
}

._img_background {
  background: rgba(0, 0, 0, 0.5);
}
</style>
