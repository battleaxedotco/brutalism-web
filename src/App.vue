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
    const self = this;
    window.addEventListener('message', (evt => {
      if (!/localhost|battleaxe.dev/.test(evt.origin)) return null;
      if (!/\{/.test(evt.data)) {
        // console.log(evt.data, this.$route.path);
        if (evt.data !== this.$route.path)
          // console.log('Force it to happen')
          this.$nextTick(() => {
            if (evt.data !== self.$route.path)
              self.$router.push(evt.data);
            self.$nextTick(() => {
              // console.log('New route is:', this.$route.path)
            })
          })
      }
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
  min-width: 400px;
  min-height: 200px;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  justify-content: center;
}
</style>
