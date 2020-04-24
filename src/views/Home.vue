<template>
  <div class="centered">
      <div class="sample-wrapper">
        <example page="" name="brutalism-api" app="ILST" theme="darkest" :gradient="0" height="600px" />
      </div>
    </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    example: require('../components/example.vue').default
  }
}
</script>

<style >
.centered {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
  flex-direction: column;
  align-items: center;
}
.sample-wrapper {
  width: 800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between
}
</style>