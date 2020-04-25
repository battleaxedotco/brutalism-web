<template>
  <div class="centered">
      <div class="sample-wrapper">
        <example :route="hashPath" name="brutalism-api" app="ILST" theme="darkest" :gradient="0" height="500px" />
      </div>
    </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    example: require('../components/repanelify').default
  },
  computed: {
    hashPath() {
      return this.$route.hash.replace(/^\#\//, '');
    }
  },
}
</script>

<style >
:root, html, body {
  margin: 0px;
  padding: 0px;
  width: 100vw;
  font-size: 12px;
}

.centered {
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