<template>
  <Panelify 
    :url="url" 
    :route="hashPath" 
    name="brutalism-vuex" 
    app="AEFT" 
    theme="gradient"
    :gradient="0"
    height="100%" 
  />
</template>

<script>
import { Panelify } from 'brutalism'

export default {
  name: 'Router',
  components: {
    Panelify
  },
  data: () => ({
    url: 'https://peaceful-fermi-6ddbc0.netlify.app/#/'
  }),
  computed: {
    hashPath() {
      let target = this.$route.hash.length ? this.$route.hash : this.$route.path;
      return target.replace(/^\#?\//, '').replace('vuex', '');
    }
  }
}
</script>

<style >
</style>