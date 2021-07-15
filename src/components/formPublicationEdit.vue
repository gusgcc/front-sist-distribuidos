<template>
  <q-card class="form-publication">
    <q-card-section>
      <q-form @submit="registerPublication">
        <h4 style="margin:0; text-align:center">Editar Publicacion</h4>
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
        <div style="display:flex;flex-direction:row;justify-content:space-around;">
          <q-btn color="secondary"  label="Cancelar" @click="$router.push('/listmypublications')"></q-btn>
          <q-btn color="primary" type="submit" label="Actualizar Publicacion" :loading="loading">
          </q-btn>
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script >
import PublicationServices from '../services/PublicationServices'
export default {
  async mounted () {
    const response = await PublicationServices.getPublicationById(this.$route.params.idPublication)
    console.log('editar', response.data)
    this.form.titulo = response.data.titulo
    this.form.subtitulo = response.data.subtitulo
    this.form.descripcion = response.data.descripcion
  },
  data () {
    return {
      loading: false,
      form: {
        titulo: '',
        subtitulo: '',
        descripcion: ''
      }
    }
  },
  methods: {
    async registerPublication () {
      try {
        this.loading = true
        const response = await PublicationServices.updatePublication({ id: this.$route.params.idPublication, ...this.form })
        this.$router.push('/listmypublications')
        this.$q.notify({
          type: 'positive',
          message: 'Se actualizo publicacion'
        })
      } catch (error) {
        console.error(error)
        this.$q.notify({
          type: 'negative',
          message: 'Error al editar publicacion'
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
