<template>
  <q-dialog v-model="isVisible" @hide="$emit('close')">
    <q-card>
      <q-card-section top>
        <h4 style="margin:0; cursor: pointer" @click="goDetail(publication)">{{publication.titulo}}</h4>
        <h5 style="margin:0;">{{publication.subtitulo}}</h5>
        <p>{{publication.descripcion}}</p>
      </q-card-section>
      <q-card-section>
        <q-list bordered>
          <q-item v-for="(postulante, index) in listPostulantes" :key="index">
            <q-item-section>
              <p><strong>Comentario:</strong> {{postulante.comentario}}</p>
              <p><strong>Disponibilidad:</strong> {{postulante.disponibilidad}}</p>
              <p><strong>Rango Salarial:</strong> {{postulante.rangoSalarial}}</p>
            </q-item-section>
            <q-item-section side>
              <q-btn color="primary">Contratar</q-btn>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import PostulacionServices from '../services/PostulacionServices'

export default {
  name: 'detailMyPublication',
  props: ['publication'],
  data () {
    return {
      isVisible: true,
      listPostulantes: []
    }
  },
  async mounted () {
    this.listPostulantes = await PostulacionServices.getListPostulantesByPublicationId(this.publication._id)
    this.listPostulantes = this.listPostulantes.data.data
  }
}
</script>

<style scoped>

</style>
