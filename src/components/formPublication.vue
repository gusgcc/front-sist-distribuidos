<template>
  <q-card class="form-publication">
    <q-card-section>
      <q-form @submit="registerPublication">
        <h4 style="margin:0; text-align:center">Crear Publicacion</h4>
        <q-input
          v-model="form.titulo"
          label="Titulo de la publicacion"
          :rules="[ val => val && val.length > 0 || 'Escriba el titulo.']"
        ></q-input>
        <q-input
        v-model="form.subtitulo"
          label="Subtitulo de la publicacion"
          :rules="[ val => val && val.length > 0 || 'Escriba el subtitulo.']"
        >
        </q-input>
        <q-input
          v-model="form.descripcion"
          label="Descripcion"
          :rules="[ val => val && val.length > 0 || 'Escriba su descripcion.']"
        >
        </q-input>
        <div>
          <q-btn color="primary" type="submit" label="Crear Publicacion" :loading="loading">
          </q-btn>
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script >
import PublicationServices from '../services/PublicationServices'
export default {
  data () {
    return {
      loading: false,
      form: {
        titulo: '',
        subtitulo: '',
        descripcion: '',
        idUsuario: ''
      }
    }
  },
  methods: {
    async registerPublication () {
      try {
        this.loading = true
        const response = await PublicationServices.createPublication(this.form)
        this.$router.push('/listmypublications')
        this.$q.notify({
          type: 'positive',
          message: 'Se creo publicacion'
        })
      } catch (error) {
        console.error(error)
        this.$q.notify({
          type: 'negative',
          message: 'Error al cear publicacion'
        })
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
<style lang="sass">
  .form-publication
    width: 500px
</style>
