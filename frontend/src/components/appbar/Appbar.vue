<template>
  <v-app-bar app dark src="../../assets/bg_black.png">
    <v-app-bar-nav-icon @click="showDrawer()"></v-app-bar-nav-icon>
    <v-toolbar-title>{{ this.mainTitle }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <Menu/>
  </v-app-bar>
</template>

<script>

import Menu from "../appbar/Menu";

export default {
  name: "navbar",
  components: {Menu},
  props: {
    mainTitle: {
      type: String,
      default: 'Booking Parking'
    },
    username: {
      type: String,
      default: 'Invitado'
    }
  },
  data: () => ({}),
  methods: {
    showDrawer() {
      this.$emit("hidden-show-drawer", null);
    },
  },
  computed: {}
}
</script>

<style scoped>
</style>