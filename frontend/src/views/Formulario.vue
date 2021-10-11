<template>
  <v-container class="my-5">
    <v-card class="mx-auto" max-width="800">
      <v-card-title>
        <div class="text-center">
          <img class="img-thumbnail" alt="Center aligned image" src="../assets/logo_Booking_Parking.png"
               max-height="150" max-width="400"/>
        </div>
        <h2 class="mx-auto">Crear una nueva cuenta</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field v-model="title" label="Nombre" name="name" prepend-icon="mdi-account" type=text
                        :rules="inputRules"></v-text-field>
          <v-text-field v-model="title" label="correo" prepend-icon="mdi-email" type=mail
                        :rules="inputRules"></v-text-field>
          <v-text-field v-model="title" label="No. celular" prepend-icon="mdi-cellphone-basic" type=mail
                        :rules="inputRules"></v-text-field>
          <v-text-field v-model="title" label="Password" prepend-icon="mdi-lock" type=password
                        :rules="inputRules"></v-text-field>
          <v-spacer></v-spacer>
          <v-btn flat @click="submit" class="success mx-0 mt-3">Registrarse</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>

</template>

<script>
export default {
  data() {
    return {
      resgitration: {
        name: "",
        email: "",
        password: "",
        confirm_password: ""
      }
    }
  }
};
</script>

<style>
</style>