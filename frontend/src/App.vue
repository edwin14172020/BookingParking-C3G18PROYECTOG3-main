<template>
  <v-app id="inspire">
    <Navbar @hidden-show-drawer="drawer = !drawer" :mainTitle="mainTitle" :username="username"/>
    <navigationDrawer :mainTitle="mainTitle" :username="username" :drawer="drawer"/>
    <v-main>
      <router-view @update:username="username= $event"></router-view>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from "./components/Footer";
import Navbar from "./components/appbar/Appbar";
import navigationDrawer from "./components/navigationDrawer/NavigationDrawer";

export default {
  name: "App",
  components: {Navbar, Footer, navigationDrawer},
  data: () => ({
    mainTitle: "Booking Parking",
    username: "",
    drawer: true
  }),
  methods: {
    loggedin(data) {
      console.log(data)
      debugger
      return
    }
  }
};
</script>
<style lang="scss">
#pantalla {
  background: rgb(97, 97, 97);
  margin: 1em;
}
</style>
