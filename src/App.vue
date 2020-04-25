<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>
export default {}
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
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
