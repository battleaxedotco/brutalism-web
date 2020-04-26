<template>
  <Panelify 
    :url="url"
    route="" 
    name="brutalism-basic" 
    app="ILST" 
    theme="darkest" 
    :gradient="0" 
    height="100%" 
  />
</template>

<script>
import { Panelify } from 'brutalism'

export default {
  name: 'Basic',
  components: {
    Panelify
  },
  data: () => ({
    url: 'https://frosty-mcclintock-6929d0.netlify.app/'
  })
}
</script>

<style >
</style>