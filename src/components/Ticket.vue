<template>
  <div
    class="h-full w-full modal flex overflow-y-hidden justify-center items-center"
  >
    <div class="bg-white p-5">
      <p class="m-2">
        Show: <span class="uppercase">{{ data.event }}</span>
      </p>

      <p class="m-2">Date: {{ formatDate(data.date) }}</p>

      <p class="m-2">TicketID: {{ data.reference_number }}</p>

      <p class="m-2">
        Seats without Pop corn and Drinks: {{ data.seats_without }} seats
      </p>

      <p class="m-2">
        Seats with Pop corn and Drinks: {{ data.seats_with }} seats
      </p>

      <p class="m-2">
        Total seats:
        {{ parseInt(data.seats_without) + parseInt(data.seats_with) }} seats
      </p>

      <p class="m-2">Price total: ${{ data.total }}.00</p>

      <!-- <button class="m-2 p-3 text-white bg-black">
        Download
      </button> -->

      <router-link to="/">
        <button class="m-2 p-3 text-white bg-black">Done</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ticket",
  data() {
    return {};
  },

  props: ["data"],

  components: {},

  methods: {
    formatDate(date) {
      const timeArr = new Date(date).toLocaleTimeString().split(":");
      const DorN = timeArr.pop().split(" ")[1];
      return `${new Date(date).toDateString()} ${timeArr.join(":")} ${DorN}`;
    },
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

.modal {
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
}
</style>
