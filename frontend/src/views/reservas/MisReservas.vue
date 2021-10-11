<template>
  <div class="bookings">
    <!--<v-btn color="primary" to="/products/new">New product</v-btn>-->
    <v-container>
      <h1>Mis reservas</h1>
      <v-row>
        <v-col
            v-for="booking in bookings"
            :key="booking.code"
            md="4"
            sm="6"
            cols="12"
        >
          <BookingCard :item="booking"></BookingCard>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {bookings} from "../../controllers/Bookings.controller";
import BookingCard from "../../components/BookingCards.vue";

export default {
  props:["item"],
  name: "MisReservas",
  components: {
    BookingCard,
  },
  data(){
    return {
      bookings: [],
    };
  },
 
  created() {
    bookings.getAllBookings() 
        .then((response) => {
          this.bookings = response.data;
        })
        .catch((err) => console.error(err));
  },   
  methods: {
    editar(){
      console.log(`Editar ${this.item.code}`);
    },
    eliminar(){
      console.log(`Eliminar ${this.item.code}`);
    }
  }
}

</script>

<style>

</style>