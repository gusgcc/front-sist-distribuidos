<template>
  <q-page class="list-my-publications">
    <q-list bordered separator class="list-my-publications__list">
        <q-item v-for="(publication,index) in listPublications" :key="index" class="">
          <q-item-section top  @click="showDetail(publication)">
              <h4 style="margin:0; cursor: pointer"> {{publication.titulo}}</h4>
              <h5 style="margin:0;">{{publication.subtitulo}}</h5>
              <p>{{publication.descripcion}}</p>
          </q-item-section>
          <q-item-section side @click="editPublication(publication._id)">
            <q-icon name="edit" color="warning" size="md" style="cursor:pointer;"></q-icon>
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
    <detail-my-publication ref="detailPublication" v-if="isVisibleDialogDetail" :publication="dataDetail" @close="isVisibleDialogDetail=false" ></detail-my-publication>
  </q-page>
</template>

<script>
import PublicationServices from '../services/PublicationServices'
import DetailMyPublication from '../components/detailMyPublication'
export default {
  components: {
    'detail-my-publication': DetailMyPublication
  },
  data () {
    return {
      listPublications: [],
      search: '',
      isVisibleDialogDetail: false,
      dataDetail: {}
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
    },
    editPublication (idPublication) {
      this.$router.push('/editpublication/' + idPublication)
    },
    showDetail (publication) {
      this.isVisibleDialogDetail = true
      this.dataDetail = publication
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
