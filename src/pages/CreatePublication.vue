<template>
  <q-page class="create-publication">
    <form-publication></form-publication>
  </q-page>
</template>

<script>
import formPublication from 'src/components/formPublication.vue'
export default {
  components: { formPublication }
}
</script>
<style lang="sass">
.create-publication
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
</style>
