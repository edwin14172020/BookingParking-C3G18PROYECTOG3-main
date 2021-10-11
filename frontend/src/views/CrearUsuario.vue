<template>
      <div class="container">
        <h3>CREACION DE USUARIOS</h3>
        <div class="row">
          <div class="col m12 card-panel">
            <validation-observer ref="observer" v-slot="{ invalid }">
              <form @submit.prevent="submit">
                <validation-provider v-slot="{ errors }" name="Nombre y Apellido" rules="required|max:30">
                  <div class="col m6">
                    <v-text-field v-model="name" :error-messages="errors" label="Nombre y Apellido"
                                  required></v-text-field>
                  </div>
                </validation-provider>

                <validation-provider
                    v-slot="{ errors }"
                    name="Numero de Celular"
                    :rules="{
            required: true,
            digits: 10,
            regex: ''
            }"
                >
                  <div class="col m6">
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
                    rules="required|email"
                >
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
                    name="Password"
                    rules="required"
                >
                  <div class="col m6">
                    <v-text-field
                        v-model="password"
                        :error-messages="errors"
                        type="password"
                        label="password"
                        required
                    ></v-text-field>
                  </div>
                </validation-provider>

                <validation-provider
                    v-slot="{ errors }"
                    name="Password"
                    rules="required"
                >
                  <div class="col m6">
                    <v-text-field
                        v-model="password"
                        :error-messages="errors"
                        type="password"
                        label="password"
                        required
                    ></v-text-field>
                  </div>
                </validation-provider>

                <validation-provider
                    v-slot="{ errors }"
                    name="Tipo de Usuario"
                    rules="required"
                >
                  <div class="col m6">
                    <v-select
                        v-model="select"
                        :items="items"
                        :error-messages="errors"
                        label="Tipo de Usuario"
                        data-vv-name="select"
                        required
                    ></v-select>
                  </div>
                </validation-provider>


                <div class="col m6">
                  <v-btn href="/" color="gris claro -5" :disabled="invalid">Enviar</v-btn>

                  <v-btn @click="clear" color="gris claro -3">
                    Borrar
                  </v-btn>
                </div>
              </form>
            </validation-observer>
          </div>
        </div>
      </div>
</template>

<script>
import {required, digits, email, max, regex,} from 'vee-validate/dist/rules'
import {extend, ValidationObserver, ValidationProvider, setInteractionMode} from 'vee-validate'

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
  data: () => ({

    name: '',
    phoneNumber: '',
    email: '',
    select: null,
    password: '',
    items: [
      'Administrador',
      'Cliente',
    ],
    checkbox: null,

  }),
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = 'YEAR'))
    },
  },
  methods: {
    submit() {
      this.$refs.observer.validate()

    },
    clear() {
      this.name = ''
      this.phoneNumber = ''
      this.email = ''
      this.password = ''
      this.select = ''
      this.checkbox = null
      this.$refs.observer.reset()
    },

  }
}

</script>
<style >

</style>