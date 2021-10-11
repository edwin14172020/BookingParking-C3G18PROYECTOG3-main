<template>
  <v-list dense nav>
    <div v-for="item in items" :key="item.title">
      <v-list-item link :to="item.route" v-if="item.show">
        <v-list-item-icon>
          <v-icon class="menu-icon">{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </div>
  </v-list>
</template>

<script>
export default {
  props: {
    mainTitle: {
      type: String,
      default: 'Booking Parking'
    },
    username: {
      type: String,
      default: 'Invitado'
    },
  },
  data: () => {
    return {
      items: [
        {title: "Inicio", icon: "mdi-home", route: "/", show: true},
        {title: "Crear Usuarios", icon: 'mdi-account', route: "/CrearUsuario", show: true},
        {title: "Mis vehículos", icon: "mdi-car", route: "/mis-vehiculos", show: true},
        {title: "Mis reservas", icon: "mdi-car", route: "/bookings", show: false},
        {title: "Reservas", icon: "mdi-calendar-month", route: "/reservas", show: true},
      ],
    };
  },
  computed: {},
  methods: {}
};
</script>
<style scoped>
.menu-icon {
  align-items: stretch;
}
</style>