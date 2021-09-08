<template>
  <q-page class="list-my-publications">
    <q-input v-model="search" class="list-my-publications__list" clearable color="primary" filled label="Buscar"/>
    <br>
    <q-card v-for="(publication,index) in listPublications" :key="index" class="list-my-publications__list">
      <q-card-section top>
        <h4 style="margin:0;">{{ publication.titulo }}</h4>
        <h5 style="margin:0; opacity: 0.9;">{{ publication.subtitulo }}</h5>
        <p style="margin:0;">{{ publication.descripcion }}</p>
      </q-card-section>
      <q-card-section side>
        <q-btn color="primary" label="Postular" @click="showDialogPostular(publication)"></q-btn>
      </q-card-section>
    </q-card>
    <q-card v-if="listPublications.length==0">
      <q-card-section>
        <h3>No hay publicaciones !!!</h3>
      </q-card-section>
    </q-card>
    <dialogPostular v-if="isVisibleDialogPostular" :id-postulante="idUser" :id-publicacion="selectedIdPublication"
                    @close="isVisibleDialogPostular=false"></dialogPostular>
  </q-page>
</template>

<script>
import PublicationServices from '../services/PublicationServices'
import dialogPostular from '../components/dialogPostular'
export default {
  data () {
    return {
      listPublications: [],
      search: '',
      isVisibleDialogPostular: false,
      idUser: '',
      selectedIdPublication: ''
    }
  },
  components: {
    dialogPostular
  },
  async mounted () {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    await this.loadPublications()
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
    this.idUser = this.$store.state.userModule.user.id

    const a = document.createElement('script')
    a.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1'
    document.head.appendChild(a)

    const n = document.createElement('df-messenger')
    n.setAttribute('intent', 'Welcome')
    n.setAttribute('chat-title', 'ChatEasyWork')
    n.setAttribute('agent-id', '2798bac1-2a7f-43a8-84b7-2bb0b1f84cde')
    n.setAttribute('language-code', 'es')
    n.style = 'z-index:1000;'
    document.body.appendChild(n)
  },
  watch: {
    search: function () {
      if (this.search == '') {
        this.loadPublications()
      } else {
        this.searchPublication(this.search)
      }
    }
  },
  methods: {
    showDialogPostular (publication) {
      this.isVisibleDialogPostular = true
      this.selectedIdPublication = publication._id
    },
    async loadPublications () {
      try {
        const response = await PublicationServices.getAllPublication()
        console.log('respes', response.data)
        this.listPublications = response.data.data
      } catch (error) {
        console.error(error)
      }
    },
    async searchPublication () {
      console.log('fdsdfd', this.search)
      try {
        const response = await PublicationServices.searchPublication(this.search)
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
    max-width: 600px
    margin-bottom: 15px
</style>
