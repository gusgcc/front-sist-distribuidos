<template>
  <q-page class="list-my-publications">
        <q-list bordered separator class="list-my-publications__list">
        <q-item v-for="(publication,index) in listPublications" :key="index" class="">
          <q-item-section top>
              <h4 style="margin:0;">{{publication.titulo}}</h4>
              <h5 style="margin:0;">{{publication.subtitulo}}</h5>
              <p>{{publication.descripcion}}</p>
          </q-item-section>
          <q-item-section side @click="deletePublication(publication._id)" >
            <q-icon name="delete" color="red" size="md" style="cursor:pointer;"></q-icon>
          </q-item-section>
        </q-item>
        <q-item v-if="listPublications.length==0">
          <q-item-section>
            <q-item-label>
              <h3>Aun no has creado ninguna publicacion !!!</h3>
            </q-item-label>
          </q-item-section>
        </q-item>
    </q-list>
  </q-page>
</template>

<script>
import PublicationServices from '../services/PublicationServices'
export default {
  data () {
    return {
      listPublications: []
    }
  },
  async mounted () {
    await this.loadPublications()
  },
  methods: {
    async  deletePublication (idPublication) {
      try {
        const response = await PublicationServices.deletePublication(idPublication)
        this.$q.notify({
          type: 'positive',
          message: 'Se borro publicacion'
        })
        await this.loadPublications()
      } catch (error) {
        console.error(error)
        this.$q.notify({
          type: 'negative',
          message: 'Ocurrio un error al intentar Borrar publicacion'
        })
      }
    },
    async loadPublications () {
      try {
        const response = await PublicationServices.getPublicationsByUser(this.$store.state.userModule.user.id)
        console.log('respes', response.data)
        this.listPublications = response.data
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style lang="sass">
.list-my-publications
  display: flex
  flex-direction: column
  align-items: center
  padding-top: 5%
  &__list
    width: 80%
</style>
