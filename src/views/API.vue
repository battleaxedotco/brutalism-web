<template>
  <Panelify 
    :route="hashPath" 
    name="brutalism-api" 
    app="ILST" 
    theme="darkest" 
    height="100%" 
  />
</template>

<script>
import { Panelify } from 'brutalism'

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
  }
}
</script>

<style >
</style>