<template>
  <q-layout view="hhh lpr fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Sistema empleos
        </q-toolbar-title>
        <q-toolbar-title>
          {{userType == 'USER_POSTULANT' ? 'Usuario Empleado' : 'Usuario Empleador'}}
        </q-toolbar-title>
        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="left" side="left" overlay bordered>
        <q-scroll-area class="fit">
          <q-list>

            <template v-for="(menuItem, index) in menuList" >
              <q-item v-show="menuItem.userType==userType" clickable :active="menuItem.label === 'Outbox'" v-ripple :key="index" @click="$router.push(menuItem.to)">
                <q-item-section avatar >
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
            </template>
            <q-item clickable @click="logout" >
              <q-item-section avatar>
                <q-icon name="logout" color="red"></q-icon>
              </q-item-section>
              <q-item-section style="color:red;">
                Cerrar Sesion
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>    </q-drawer>

    <!--
    <q-drawer v-model="right" side="right" overlay bordered>
    </q-drawer>
    -->

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import UserServices from '../services/UserServices'
export default {
  data () {
    return {
      left: false,
      right: false,
      menuList: [
        {
          icon: 'post_add',
          label: 'Crear Publicacion',
          separator: true,
          to: 'CreatePublication',
          userType : 'USER_EMPLOYER' 
        },
        {
          icon: 'list_alt',
          label: 'Ver Mis publicaciones',
          separator: false,
          to: 'ListMyPublications',
          userType : 'USER_EMPLOYER' 
        },
        { 
          icon: 'list_alt',
          label: 'Ver empleos',
          separator: false,
          to: 'ListAllPublications',
          userType : 'USER_POSTULANT'
        }
      ]
    }
  },
  methods: {
    logout () {
      this.$store.commit('userModule/changeStateAuthenticated', false)
      this.$store.commit('userModule/setUser', null)
      UserServices.setAuthToken(null)
      this.$router.push('/login')
    }
  },
  computed:{
    userType(){
      return this.$store.state.userModule.user.tipo
    }
  }
}
</script>
