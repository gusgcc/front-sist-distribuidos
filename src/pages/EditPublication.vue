<template>
    <div class="list-my-publications">
        <formPublicationEdit></formPublicationEdit>
    </div>
</template>

<script>
import PublicationServices from '../services/PublicationServices'

import formPublicationEdit from 'src/components/formPublicationEdit.vue'
export default {
  components: { formPublicationEdit },
  async mounted () {
    const response = await PublicationServices.getPublicationById(this.$route.params.idPublication)
    console.log('editar', response.data)
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
