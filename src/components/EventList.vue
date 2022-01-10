<template>
  <div class="list">
    <div v-for="(event, i) in events" :key="i" class="mb-3">
      <figure
        class="md:flex bg-gray-100 rounded-xl p-8 md:p-0 dark:bg-gray-800"
      >
        <img
          class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          :src="`http://localhost:1337${event.attributes.image.data.attributes.formats.large.url}`"
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <h1 class="text-2xl mb-3 font-bold uppercase">
              {{ event.attributes.name }}
            </h1>
            <p class="text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              dolore dignissimos exercitationem, optio corrupti nihil veniam
              quod unde reprehenderit cum accusantium quaerat nostrum placeat,
              sapiente tempore perspiciatis maiores iure esse?
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
              Number of seats available:
              {{ event.attributes.tickets_available }}
            </div>
            <div class="text-gray-700 dark:text-gray-500">
              {{ new Date(event.attributes.date).toDateString() }}
            </div>
          </figcaption>
          <!-- <router-link to="/about"> -->
          <button @click="getDetail" class="bg-black text-white p-3">
            Get tickets
          </button>
          <!-- </router-link> -->
        </div>
      </figure>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      events: [],
    };
  },

  methods: {
    getDetail() {
      console.log("btn clicked");
      this.$router.push("/about");
    },
  },

  async created() {
    const res = await axios.get("http://localhost:1337/api/events?populate=*");
    console.log(res.data.data[0]);
    this.events = res.data.data;
  },
};
</script>

<style scoped></style>
