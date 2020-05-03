<template>
  <div id="app">
    <div class="centered-wrapper">
      <div class="sample-wrapper">
        <router-view/>
        <Button 
          v-if="inIframe" 
          icon="reload"
          primary
          class="refresh-btn" 
          style="position: absolute;top: 10px;"
          @click="refresh"
        >Refresh panel</Button>
      </div>
    </div>
  </div>
</template>


<script>
import starlette from 'starlette'
import { Button } from 'brutalism'

export default {
  computed: {
    inIframe() {
      return window.location !== window.parent.location
    }
  },
  components: {
    'Button': Button
  },
  mounted() {
    starlette.initAs('ILST', 'darkest');
  },
  methods: {
    refresh() {
      location.reload();
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

:root, body, html, #app {
  overflow: hidden;
  height: 100%;
  background: transparent !important;
}

:root, html, body {
  margin: 0px;
  padding: 0px;
  width: 100vw;
  font-size: 12px;
}

.centered-wrapper {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  flex-wrap: wrap;
  width: 100vw;
  height: 100%;
  flex-direction: column;
  align-items: center;
  /* padding: 10px; */
}
.sample-wrapper {
  max-height: 700px;
  max-width: 800px;
  min-width: 300px;
  min-height: 200px;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  justify-content: center;
}
</style>
