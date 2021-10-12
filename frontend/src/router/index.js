import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import CrearUsuario from '../views/CrearUsuario.vue'
import Login from '../views/Login.vue'
import Reservas from '../views/reservas/Reservas.vue'
import Bookings from '../views/reservas/MisReservas'
import Formulario from '../views/Formulario.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/Formulario',
        name: 'Formulario',
        component: Formulario
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/reservas',
        name: 'reservas',
        component: Reservas
    },
    {
        path: '/reservas/:id',
        name: 'Editar Reserva',
        component: Reservas
      },
    {
        path: '/crearusuario',
        name: 'crearusuario',
        component: CrearUsuario
    },
    {
        path: '/bookings',
        name: 'Mis Reservas',
        component: Bookings
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
