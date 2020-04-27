<template>
  <div id="app">
    <div class="centered-wrapper">
      <div class="sample-wrapper">
        <router-view/>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  mounted() {
    window.addEventListener('message', (evt => {
      console.log(evt.data, this.$route.path);
    }), false);
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
  padding: 10px;
}
.sample-wrapper {
  max-height: 700px;
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
}
</style>
