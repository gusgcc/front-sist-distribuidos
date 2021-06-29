<template>
  <q-page class="list-my-publications">
        <q-card class="list-my-publications__list" v-for="(publication,index) in listPublications" :key="index" >
          <q-card-section top>
              <h4 style="margin:0;">{{publication.titulo}}</h4>
              <h5 style="margin:0; opacity: 0.9;">{{publication.subtitulo}}</h5>
              <p style="margin:0;">{{publication.descripcion}}</p>
          </q-card-section>
          <q-card-section side  >
            <q-btn color="primary" label="Postular"> </q-btn>
          </q-card-section>
        </q-card>
        <q-card v-if="listPublications.length==0">
          <q-card-section>
            <q-card-label>
              <h3>Aun No hay publicaciones !!!</h3>
            </q-card-label>
          </q-card-section>
        </q-card>
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
    async loadPublications () {
      try {
        const response = await PublicationServices.getAllPublication()
        console.log('respes', response.data)
        this.listPublications = response.data.data
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
    width: 70%
    max-width:600px
    margin-bottom: 15px
</style>
