<template>
  <Panelify 
    debug
    :route="hashPath" 
    name="brutalism-api" 
    app="ILST" 
    theme="darkest" 
    height="100%" 
  />
</template>

<script>
import { Panelify } from 'brutalism'
// import Panelify from '@/components/Panelify'

export default {
  name: 'Home',
  components: {
    Panelify
  },
  computed: {
    hashPath() {
      let target = this.$route.hash.length ? this.$route.hash : this.$route.path;
      return target.replace(/^\#?\//, '');
    }
  },
  mounted() {
    console.log('Hi there')
    window.addEventListener('message', (evt => {
      let trustedOrigins = [
        'https://zen-ramanujan-97e3d0.netlify.app',
        'https://frosty-mcclintock-6929d0.netlify.app',
        'https://keen-mcnulty-28a063.netlify.app',
        'https://peaceful-fermi-6ddbc0.netlify.app'
      ]
      if (!trustedOrigins.includes(evt.origin)) return null;
      
      let data = JSON.parse(evt.data);
      if (this.$route.path !== data.fullPath) {
        let newPath = data.fullPath;
        this.$router.push(data.fullPath)
      }
    }), false);
  }
}
</script>

<style >
</style>