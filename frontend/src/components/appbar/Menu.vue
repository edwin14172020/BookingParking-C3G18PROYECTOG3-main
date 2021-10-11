<template>
  <v-menu bottom offset-y rounded="b-xl">
    <template v-slot:activator="{ on, attrs }">
      <v-btn dark icon v-bind="attrs" v-on="on">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>
    <v-list>
      <div v-for="(item, i) in items" :key="i">
        <v-list-item link :to="item.route" v-if="item.show">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </div>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "Menu",
  data: () => ({
    items: [
      {title: "Iniciar sesión", icon: "mdi-login", route: "/login", show: true},
      {title: "Perfil", icon: "mdi-face-man-profile", route: "/logout"},
      {title: "Cerrar sesión", icon: "mdi-location-exit", route: "/logout"},
    ],
    offset: true
  }),
}
</script>

<style scoped>

</style>