<template>
  <div class="list">
    <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0 dark:bg-gray-800">
      <img
        class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        src="https://files.oyebesmartest.com/uploads/large/spider-man-no-way-home-dgptqs.jpg"
        alt=""
        width="384"
        height="512"
      />
      <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p class="text-lg font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            dolore dignissimos exercitationem, optio corrupti nihil veniam quod
            unde reprehenderit cum accusantium quaerat nostrum placeat, sapiente
            tempore perspiciatis maiores iure esse?
          </p>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
          <div class="text-gray-700 dark:text-gray-500">
            Staff Engineer, Algolia
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
</template>

<script>
export default {
  data() {
    return {

    }
  },

  methods: {
    getDetail() {
      console.log("btn clicked");
      this.$router.push("/about");
    },
  },
};
</script>

<style scoped></style>
