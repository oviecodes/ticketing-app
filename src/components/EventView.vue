<template>
  <div class="">
        <!-- showcase -->
    <div style="
      background: url('https://files.oyebesmartest.com/uploads/large/spider-man-no-way-home-dgptqs.jpg');
      background-color: rgba(0, 0, 0, 0.8);
      background-blend-mode: multiply;
      background-repeat: no-repeat;
      background-size: cover;
      height: 70vh;
      " 
      class="w-screen flex items-center relative">

      <div class="w-1/2 p-4">
        <h1 class="text-6xl mb-3 text-white uppercase font-bold my-auto">spider man: No way home</h1>
        <p class="leading-normal text-lg font-thin text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit natus illum cupiditate qui, asperiores quod sapiente. A exercitationem quidem cupiditate repudiandae, odio sequi quae nam ipsam obcaecati itaque, suscipit dolores.
        </p>
      </div>

    </div>

  <div class="text-center flex justify-center items-center">

    

    <div class="mt-3 mb-3">

      <h3 class="text-4xl mt-5 mb-5">Get Tickets</h3>


      <table class="table-auto w-screen">
      <thead>
        <tr>
          <th class="w-1/2">Options</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr class="">
          <td class="p-3">Seats without popcorn and drinks</td>
          <td class="p-3">$3.00</td>
          <td class="p-3">
            <select name="quantity" id="">
              <option v-for="(num, i) of quantityModel" :key="i" value="1">{{ num }}</option>
            </select>
          </td>
          <td>$30.00</td>
        </tr>
      </tbody>
    </table>
    </div>

  </div>
    
  </div>
</template>

<script>
export default {
  data() {
      return {
        quantityModel: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }
  },

  methods: {
    getDetail() {
      console.log("btn clicked");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped></style>
