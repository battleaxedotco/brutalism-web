<template>
  <div class="centered-wrapper">
      <div class="sample-wrapper">
        <Panelify 
          :url="url" 
          :route="hashPath" 
          name="brutalism-api" 
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
  },
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