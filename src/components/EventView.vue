<template>
  <div class="">
    <!-- showcase -->

    <!-- :style=" {
        background: `url('http://localhost:1337${event.attributes.image.data.attributes.formats.large.url}');
        background-color: rgba(0, 0, 0, 0.8);
        background-blend-mode: multiply;
        background-repeat: no-repeat;
        background-size: cover;
        height: 70vh;`
      }
      " -->

    <div
      style="
        background: url('https://files.oyebesmartest.com/uploads/large/spider-man-no-way-home-dgptqs.jpg');
        background-color: rgba(0, 0, 0, 0.8);
        background-blend-mode: multiply;
        background-repeat: no-repeat;
        background-size: cover;
        height: 70vh;
      "
      class="w-screen flex items-center relative"
      ref="showcase"
    >
      <div class="w-1/2 p-5">
        <h1 class="text-6xl mb-3 text-white uppercase font-bold my-auto">
          spider man: No way home
        </h1>
        <p class="leading-normal text-lg font-thin text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit natus
          illum cupiditate qui, asperiores quod sapiente. A exercitationem
          quidem cupiditate repudiandae, odio sequi quae nam ipsam obcaecati
          itaque, suscipit dolores.
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
            <tr class="p-3">
              <td class="p-3">Seats without popcorn and drinks</td>
              <td class="p-3">$3.00</td>
              <td class="p-3">
                <select class="p-3" id="" v-model="no_of_seats_without">
                  <option
                    class="p-3 bg-dark"
                    v-for="(num, i) of quantityModel"
                    :key="i"
                    :value="`${num}`"
                  >
                    {{ num }}
                  </option>
                </select>
              </td>
              <td>${{ calcWithoutTotal }}.00</td>
            </tr>

            <tr class="p-3">
              <td class="p-3">Seats with popcorn and drinks</td>
              <td class="p-3">$4.00</td>
              <td class="p-3">
                <select class="p-3" id="" v-model="no_of_seats_with">
                  <option
                    class="p-3 bg-dark"
                    v-for="(num, i) of quantityModel"
                    :key="i"
                    :value="`${num}`"
                  >
                    {{ num }}
                  </option>
                </select>
              </td>
              <td>${{ calcWithTotal }}.00</td>
            </tr>
          </tbody>
        </table>

        <div class="m-3">
          <p class="mb-3">Ticket Total: ${{ calcTotal }}.00</p>
          <button class="bg-black text-white p-3">Book Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantityModel: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      no_of_seats_without: 0,
      price_of_seats_without: 3,
      no_of_seats_with: 0,
      price_of_seats_with: 4,
    };
  },

  methods: {
    getDetail() {
      console.log("btn clicked");
      this.$router.push("/");
    },
    assignValue(num) {
      console.log(num);
      this.no_of_seats_without = num;
    },
  },

  computed: {
    calcWithoutTotal() {
      return (
        parseInt(this.no_of_seats_without) *
        parseInt(this.price_of_seats_without)
      );
    },

    calcWithTotal() {
      return (
        parseInt(this.no_of_seats_with) * parseInt(this.price_of_seats_with)
      );
    },

    calcTotal() {
      return this.calcWithoutTotal + this.calcWithTotal;
    },
  }

};
</script>

<style scoped></style>
