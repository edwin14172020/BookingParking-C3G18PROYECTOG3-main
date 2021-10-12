<template>
  <v-card>

    <v-card-title>{{ item.name }}</v-card-title> 
    <v-card-subtitle><b>placa:</b> {{item.code}}</v-card-subtitle>
    <v-card-subtitle><b>phoneNumber:</b> {{ item.phoneNumber }}</v-card-subtitle>
    <v-card-subtitle><b>email:</b> {{ item.email }}</v-card-subtitle>
    <v-card-subtitle><b>Tipo de Reserva:</b> {{ item.select }}</v-card-subtitle>
    <v-card-subtitle><b>Tipo de Vehiculo:</b> {{ item.select1 }}</v-card-subtitle>
    <v-card-subtitle><b>marca:</b> {{ item.marca }}</v-card-subtitle>
    <v-card-subtitle><b>color:</b> {{ item.color }}</v-card-subtitle>

    <v-card-subtitle><b>fecha:</b> {{ item.fecha }}</v-card-subtitle>
    <v-card-subtitle><b>hora:</b> {{ item.hora }}</v-card-subtitle>
    <div class="categories">
      <v-chip v-for="category in item.categories" :key="category">{{
          category
        }}</v-chip>
    </div>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="success" :to="'/reservas/' + item.code"> Editar </v-btn>
      <v-btn color="error" @click="eliminar()"> Eliminar </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

import {bookings} from "../controllers/Bookings.controller";

export default {
  name: "MyBookings",
  props: ["item"],
  methods: {
    editar(){
      bookings.editBooking(this.item.code )
       console.log(` Editar  ${this.item.code}`);
       this.$router.push(`/reservas/${this.item.code}`);
    },
    eliminar(){
      bookings.deleteBooking(this.item.code)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => console.error(err.reponse.data.message));
    }, 
  }
}
</script>

<style>

</style>