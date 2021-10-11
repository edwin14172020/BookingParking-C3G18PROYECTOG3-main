<template>
  <v-footer dark padless src="../assets/bg_black.png" >
    <v-row
        justify="center"
        no-gutters
    >
      <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
          class="py-4 text-center white--text"
          cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Booking Parking</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => {
    return {
      links: [
        'Inicio',
        'Acerca de',
        'Servicios',
        'Contactanos',
      ],
      items: [
        {title: "Dashboard", icon: "mdi-view-dashboard", route: "/"},
        {title: "Mis vehículos", icon: "mdi-car", route: "/mis-vehiculos"},
        {title: "Reservas", icon: "mdi-calendar-month", route: "/reservas"},
      ],
    };
  },
}
</script>

<style scoped>
</style>