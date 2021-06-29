<template>
  <q-layout>
    <q-page-container>
      <q-page padding class="page-login">
        <q-card class="page-login__form">
          <q-card-section >
            <h1 class="text-h4 no-margin text-center">Iniciar Sesion</h1>
          </q-card-section>
          <q-card-section>
            <q-form @submit="onLogin">
              <q-input
                v-model="login.email"
                label="Tu correo"
                :rules="[ val => val && val.length > 0 || 'Escriba su email.']"
              ></q-input>
              <q-input
                v-model="login.password"
                label="Tu contraseña"
                :rules="[ val => val && val.length > 0 || 'Escriba su contraseña.']"
                type="password"
              ></q-input>
              <q-toggle v-model="accept" label="Acepto la licencia de terminos." />
              <div>
                <q-btn color="primary" type="submit" label="Iniciar Sesion">
                </q-btn>
              </div>
            </q-form>
          </q-card-section>
          <q-card-section>
            No tienes cuenta? <a style="cursor:pointer; font-weight: bold; color: blue;" @click="$router.push('/register')">Registrate</a>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import UserServices from '../services/UserServices'
export default {
  // name: 'PageName',
  data () {
    return {
      accept: false,
      login: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async onLogin () {
      try {
        const response = await UserServices.login(this.login)
        console.log(response)
        this.$store.commit('userModule/changeStateAuthenticated', true)
        this.$store.commit('userModule/setUser', response.data.data)
        UserServices.setAuthToken(response.data.data.token)
        this.$q.notify({
          type: 'positive',
          message: 'Bienvenido, ' + response.data.data.email
        })

        if(response.data.data.tipo === 'USER_POSTULANT'){
          this.$router.push('/listallpublications')
        }else{
          this.$router.push('/listmypublications')
        }



      } catch (e) {
          this.$q.notify({
          type: 'negative',
          message: e.response.data.mensaje? e.response.data.mensaje: 'Ocurrio un error.'
        })
        console.log(e)
      }
    }
  }
}
</script>
<style lang="sass">
  .page-login
    width: 100%
    height: 100%
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
    &__form
      width: 400px
</style>
