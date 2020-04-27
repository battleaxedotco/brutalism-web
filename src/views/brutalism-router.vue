<template>
  <Panelify 
    :url="url"
    :route="hashPath" 
    name="brutalism-router" 
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
    url: 'https://keen-mcnulty-28a063.netlify.app/#'
  }),
  computed: {
    hashPath() {
      let target = this.$route.hash.length ? this.$route.hash : this.$route.path;
      return target.replace(/^\#?\//, '').replace('router', '');
    }
  },
  mounted() {
    window.addEventListener('message', (evt => {
      let trustedOrigins = [
        'https://zen-ramanujan-97e3d0.netlify.app',
        'https://frosty-mcclintock-6929d0.netlify.app',
        'https://keen-mcnulty-28a063.netlify.app',
        'https://peaceful-fermi-6ddbc0.netlify.app'
      ]
      if (!trustedOrigins.includes(evt.origin)) return null;
      let data = JSON.parse(evt.data), 
        newPath = `/router${data.fullPath.length > 1 ? data.fullPath : ''}`;
      if (this.$route.path !== data.fullPath && this.$route.path !== newPath) {
        this.$router.push(newPath)
      }
    }), false);
  }
}
</script>

<style >
</style>