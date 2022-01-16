<template>
  <div class="flex justify-center items-center">
    <div class="">
      <p>TicketID: {{ ticket.attributes.reference_number }}</p>

      <p>
        Seats without Pop corn and Drinks:
        {{ ticket.attributes.seats_without }} seats
      </p>

      <p>
        Seats with Pop corn and Drinks: {{ ticket.attributes.seats_with }} seats
      </p>

      <p>Price total: ${{ ticket.attributes.total }}.00</p>

      <button @click="downloadFile" class="p-3 text-white bg-black">
        Download
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Ticket",
  data() {
    return {
      ticket: {},
      id: "",
    };
  },

  components: {},

  async created() {
    this.id = this.$route.params.id;
    const res = await axios.get(
      `http://localhost:1337/api/tickets/${this.$route.params.id}?populate=*`
    );
    this.ticket = res.data.data;
  },

  methods: {
    downloadFile() {
      axios({
        url: "http://localhost:8000/demo.pdf", // File URL Goes Here
        method: "GET",
        responseType: "blob",
      }).then((res) => {
        var FILE = window.URL.createObjectURL(new Blob([res.data]));

        var docUrl = document.createElement("x");
        docUrl.href = FILE;
        docUrl.setAttribute("download", "file.pdf");
        document.body.appendChild(docUrl);
        docUrl.click();
      });
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
</style>
