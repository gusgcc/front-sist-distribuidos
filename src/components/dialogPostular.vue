<template>
  <q-dialog ref="myDialog" persistent v-model="show" style="background:white; z-index: 1000" @hide="$emit('close')" >
    <q-card style="width: 600px; padding: 2.5%">
      <q-form @submit="postular">

      <q-toolbar>
        <h3 class="full-width text-center">Postular</h3>
      </q-toolbar>
      <q-card-section>
        <q-input
          v-model="form.rangoSalarial"
          :rules="[ val => val && val.length > 0 || 'Escriba el Rango Salarial.']"
          label="Rango Salarial"

        ></q-input>
        <q-input
          v-model="form.comentario"
          :rules="[ val => val && val.length > 0 || 'Escriba el Comentario.']"
          label="Comentario"

        ></q-input>
        <q-input
          v-model="form.disponibilidad"
          :rules="[ val => val && val.length > 0 || 'Escriba la Disponibilidad.']"
          label="Disponibilidad"

        ></q-input>
      </q-card-section>
      <br>
      <q-card-actions class="row justify-around">
        <q-btn color="secondary" label="Cancelar" @click="$refs.myDialog.hide()"></q-btn>
        <q-btn color="primary" type="submit" label="Postular"></q-btn>
      </q-card-actions>
      </q-form>

    </q-card>
  </q-dialog>
</template>

<script>

import PostulacionServices from '../services/PostulacionServices'

export default {
  name: 'dialogPostular',
  props: {
    idPublicacion: {
      required: true,
      type: String,
      default: ''
    },
    idPostulante: {
      required: true,
      type: String,
      default: ''
    }
  },
  data () {
    return {
      show: true,
      form: {
        rangoSalarial: '',
        comentario: '',
        disponibilidad: ''
      }
    }
  },
  methods: {
    async postular () {
      try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        await PostulacionServices.postular({
          ...this.form,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          idPublicacion: this.idPublicacion,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          idPostulante: this.idPostulante
        })
        this.$q.notify({
          type: 'positive',
          message: 'Se Postulo Correctamente'
        })
      } catch (e) {
        console.error(e)
        this.$q.notify({
          type: 'negative',
          message: 'Error al postular a publicacion.'
        })
      } finally {
        this.$emit('close')
      }
    }
  }
}
</script>

<style scoped>

</style>
