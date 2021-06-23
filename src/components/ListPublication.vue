<template>
    <q-list bordered separator>
        <q-item v-for="(publication,index) in listPublications" :key="index">
            <q-item>
                <q-item-section>
                    <q-item-label>{publication.titulo}</q-item-label>
                    <q-item-label>{publication.subtitulo}</q-item-label>
                    <q-item-label>{publication.descripcion}</q-item-label>
                </q-item-section>
            </q-item>
        </q-item>
    </q-list>
</template>

<script>
import PublicationServices from '../services/PublicationServices'
export default {
  data () {
    return {
      listPublications: []
    }
  },
  mounted () {
    try {
      const response = await PublicationServices.getPublicationsByUser(this.$store.state.userModule.user)
      console.log('respes', response)
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<style>

</style>
