<template>
  <div class="centered-wrapper">
      <div class="sample-wrapper">
        <Panelify 
          :url="url" 
          route="" 
          name="brutalism-vuex" 
          app="ILST" 
          theme="darkest" 
          height="666px" 
        />
      </div>
    </div>
</template>

<script>
import { Panelify } from 'brutalism'

export default {
  name: 'Router',
  components: {
    Panelify
  },
  data: () => ({
    url: ''
  }),
  components: {
    example: require('../components/repanelify').default
  }
}
</script>

<style >
</style>