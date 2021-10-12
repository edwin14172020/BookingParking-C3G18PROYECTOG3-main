<template>
    <div class="container">
      <h2>FORMULARIO DE RESERVAS</h2>
      <div class="row">
        <div class="col m12 card-panel">
          <validation-observer
              ref="observer"
              v-slot="{ invalid }">
            <form @submit.prevent="submit">
              <validation-provider
                  v-slot="{ errors }"
                  name="Nombre y Apellido"
                  rules="required|max:30">
                <div class="col m6">
                  <v-text-field
                      v-model="name"
                      :error-messages="errors"
                      label="Nombre y Apellido"
                      required
                  ></v-text-field>
                </div>
              </validation-provider>
              <validation-provider
                  v-slot="{ errors }"
                  name="Numero de Celular"
                  :rules="{
                    required: true,
                    digits: 10,
                   regex: ''
                    }">
                <div class="col m4">
                  <v-text-field
                      v-model="phoneNumber"
                      :error-messages="errors"
                      label="Celular"
                      required
                  ></v-text-field>
                </div>
              </validation-provider>
              <validation-provider
                  v-slot="{ errors }"
                  name="email"
                  rules="required|email">
                <div class="col m6">
                  <v-text-field
                      v-model="email"
                      :error-messages="errors"
                      label="E-mail"
                      required
                  ></v-text-field>
                </div>
              </validation-provider>
              <validation-provider
                  v-slot="{ errors }"
                  name="Tipo de Reserva"
                  rules="required">
                <div class="col m6">
                  <v-select
                      v-model="select"
                      :items="items"
                      :error-messages="errors"
                      label="Tipo de Reserva"
                      data-vv-name="select"
                      required
                  ></v-select>
                </div>
              </validation-provider>
              <validation-provider
                  v-slot="{ errors }"
                  name="Tipo de Vehiculo"
                  rules="required"
              >
                <div class="col m6">
                  <v-select
                      v-model="select1"
                      :items="items1"
                      :error-messages="errors"
                      label="Tipo de Vehiculo"
                      data-vv-name="select"
                      required
                  ></v-select>
                </div>
              </validation-provider>

              <validation-provider
                  v-slot="{ errors }"
                  name="Marca del Vehiculo"
                  rules="required|max:30"

              >
                <div class="col m6">
                  <v-text-field
                      v-model="marca"
                      :error-messages="errors"
                      label="Marca del Vehiculo"
                      required
                  ></v-text-field>
                </div>
              </validation-provider>

              <validation-provider
                  v-slot="{ errors }"
                  name="Color del Vehiculo"
                  rules="required|max:30"

              >
                <div class="col m6">
                  <v-text-field
                      v-model="color"
                      :error-messages="errors"
                      label="Color del Vehiculo"
                      required
                  ></v-text-field>
                </div>
              </validation-provider>

              <validation-provider
                  v-slot="{ errors }"
                  name="Placa del Vehiculo"
                  rules="required|max:30"

              >
                <div class="col m6">
                  <v-text-field
                      v-model="code"
                      :error-messages="errors"
                      label="Placa del Vehiculo"
                      required
                  ></v-text-field>
                </div>

              </validation-provider>

              <validation-provider
                  v-slot="{ errors }"
                  name="Fecha de ingreso"
                  rules="required"
              >
                <div class="col m6">
                  <v-text-field
                      v-model="fecha"
                      :error-messages="errors"
                      label="Fecha de ingreso"
                      value=""
                      type="date"
                  ></v-text-field>
                </div>
              </validation-provider>

              <validation-provider
                  v-slot="{ errors }"
                  name="Hora de ingreso"
                  rules="required"
              >
                <div class="col m6">
                  <v-text-field
                      v-model="hora"
                      :error-messages="errors"
                      label="Hora de ingreso"
                      value=""
                      type="time"
                  ></v-text-field>
                </div>
              </validation-provider>


              <div class="col m6">
                <v-btn @click="GuardarReserva()" color="success" :disabled="invalid">Enviar</v-btn>

                <v-btn @click="clear()" color="error">Borrar </v-btn>
              </div>
              <v-snackbar v-model="snackbar">
              {{ snackbarText }}

              <template v-slot:action="{ attrs }">
                <v-btn color="white" text v-bind="attrs" @click="closeConfirmation">
              close
                </v-btn>
              </template>
              </v-snackbar>
            </form>
          </validation-observer>
        </div>
      </div>
    </div>
</template>

<script>
import {bookings} from "../controllers/Bookings.controller"
import { required, digits, email, max, regex, } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

setInteractionMode('eager')

extend('digits', {
  ...digits,
  message: '{_field_} necesita ser {length} digitos. ({_value_})',
})
extend('required', {
  ...required,
  message: '{_field_} No puede estar vacío',
})
extend('max', {
  ...max,
  message: '{_field_} puede no ser mayor que {length} caracteres',
})
extend('regex', {
  ...regex,
  message: '{_field_} {_value_} No coincide {regex}',
})
extend('email', {
  ...email,
  message: 'El email debe ser válido',
})

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data ()  {
    return {
    name: '',
    phoneNumber: '',
    email: '',
    select: '',
    select1: '',
    items: [
      'Hora',
      'Dia',
      'Mensual',
    ],
    items1: [
      'Moto',
      'Carro',
      'Bicicleta',
    ],
    marca: '',
    color: '',
    code: '',
    fecha: '',
    hora: '',
    snackbar: false,
    snackbarText: '',
    };
  },
  watch: {
    menu (val) {
      val && setTimeout(() => (this.activePicker = 'YEAR'))
    },
  },
  methods: {
    submit () {
      this.$refs.observer.validate()
    }, 
    GuardarReserva(){
          console.log("Guardar Reserva")
          const reservas = {
          code: this.code,
          name: this.name,
          phoneNumber: this.phoneNumber,
          email: this.email,
          marca: this.marca,
          color: this.color,
          fecha: this.fecha,
          hora: this.hora,
          select: this.select,
          select1: this.select1,
          };
          bookings.createBooking(reservas)
          .then(() => {
              this.snackbarText ="Reserva Realizada";
              this.snackbar = true;

          })
          .catch((err)=>console.error(err));
    },
          closeConfirmation(){
            this.snackbar = false;
            this.$router.push("/bookings");
        },
    clear() {
      this.name = ''
      this.phoneNumber = ''
      this.email = ''
      this.marca = ''
      this.color = ''
      this.code = ''
      this.menu = ''
      this.fecha = ''
      this.hora = ''
      this.select = null
      this.checkbox = null
      this.$refs.observer.reset()
    },
  }
}
</script>

<style>

</style>