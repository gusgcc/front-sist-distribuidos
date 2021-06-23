<template>
  <q-layout>
    <q-page-container>
      <q-page padding class="page-register">
        <q-card class="page-register__form">
          <q-card-section >
            <h1 class="text-h4 no-margin text-center">Registrar Usuario</h1>
          </q-card-section>
          <q-card-section>
            <q-form @submit="onRegister">
              <q-input
                v-model="register.nombres"
                label="Nombres"
                :rules="[ val => val && val.length > 0 || 'Ingrese Su Nombre.']"
              ></q-input>
              <q-input
                v-model="register.apellidos"
                label="Apellidos"
                :rules="[ val => val && val.length > 0 || 'Ingrese su apellido.']"
              ></q-input>
              <q-input
                v-model="register.email"
                label="Tu correo"
                :rules="[ val => val && val.length > 0 || 'Escriba su email.']"
              ></q-input>
              <q-select
                v-model="register.tipo"
                label="Seleccione el tipo de usuario"
                :options="optionsTypesUser"
                :rules="[ val => val.value && val.value.length > 0 || 'Seleccione su opcion.']"
                option-value="value"
              >
              </q-select>
              <q-input
                v-model="register.password"
                label="Tu contraseña"
                :rules="[ val => val && val.length > 0 || 'Escriba su contraseña.']"
                type="password"
              ></q-input>
              <q-toggle v-model="accept" label="Acepto la licencia de terminos." />
              <div>
                <q-btn color="primary" type="submit" label="Registrar">
                </q-btn>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import UserServices from '../services/UserServices'
import { TYPES_USER } from '../utils/global.ts'
export default {
  // name: 'PageName',
  data () {
    return {
      optionsTypesUser: [
        { label: TYPES_USER.USER_POSTULANT, value: 'USER_POSTULANT' },
        { label: TYPES_USER.USER_EMPLOYER, value: 'USER_EMPLOYER' }
      ],

      accept: false,
      register: {
        email: '',
        password: '',
        nombres: '',
        apellidos: '',
        telefono: '',
        tipo: null
      }
    }
  },
  methods: {
    async onRegister () {
      try {
        const response = await UserServices.register({
          ...this.register,
          tipo: this.register.tipo.value
        })
        setTimeout(()=>{
          this.$router.push('/login')
        }, 3000)
        this.$q.notify({
          type: 'positive',
          message: 'Usuario creado correctamente. Se rederegira al Inicio se Sesion.',
          timeout: 3000
        })
        console.log(response)
      } catch (e) {
        console.log(e)
        this.$q.notify({
          type: 'negative',
          message: 'Error al Registrarse'
        })
      }
    }
  }
}
</script>
<style lang="sass">
.page-register
  width: 100%
  height: 100%
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center
  &__form
    width: 400px
</style>
