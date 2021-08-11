<template>
  <div class="column items-center justify-center">
    <h3>Mis Postulaciones</h3>
    <br>
    <q-card v-for="(publication,index) in listPublications" :key="index" class="list-my-publications__list">
      <q-card-section top>
        <h4 style="margin:0;">{{ publication.titulo }}</h4>
        <h5 style="margin:0; opacity: 0.9;">{{ publication.subtitulo }}</h5>
        <p style="margin:0;">{{ publication.descripcion }}</p>
      </q-card-section>
      <q-card-section side>
        <q-btn color="secondary" label="Estado" ></q-btn>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import PostulacionServices from '../services/PostulacionServices'
export default {
  name: 'ListAllPublicationsPostulated',
  data () {
    return {
      listPublications: []
    }
  },
  async mounted () {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    try {
      const aux = await PostulacionServices.getListMyPostulations(this.$store.state.userModule.user.id)
      this.listPublications = aux.data.data
    } catch (e) {

    }
  }
}
</script>

<style scoped>

</style>
