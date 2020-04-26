<template>
  <div class="centered-wrapper">
      <div class="sample-wrapper">
        <Panelify 
          :url="url"
          route="" 
          name="brutalism-basic" 
          app="ILST" 
          theme="darkest" 
          :gradient="0" 
          height="666px" 
        />
      </div>
    </div>
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