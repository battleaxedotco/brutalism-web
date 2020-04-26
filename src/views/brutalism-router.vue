<template>
  <div class="centered-wrapper">
      <div class="sample-wrapper">
        <Panelify 
          :url="url"
          :route="hashPath" 
          name="brutalism-router" 
          app="AEFT" 
          theme="gradient" 
          :gradient="0" 
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
    url: 'https://keen-mcnulty-28a063.netlify.app/#'
  }),
  computed: {
    hashPath() {
      let target = this.$route.hash.length ? this.$route.hash : this.$route.path;
      return target.replace(/^\#?\//, '');
    }
  }
}
</script>

<style >
</style>