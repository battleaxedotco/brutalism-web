<template>
  <div class="panel-wrapper" :style="``">
    <div class="panel-header">
      <div class="panel-dots">
        <div class="panel-dot" style="background: #ff796f"/>
        <div class="panel-dot" style="background: #ffd071" />
        <div class="panel-dot" style="background: #64c255" />
      </div>
      <div class="panel-title">
        {{app}}
      </div>
    </div>
    <panelify
      :extName="name"
      :appName="app"
      :theme="theme"
      :src="src"
      :width="width"
      :height="height"
      :gradient="gradient" 
    />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    app: {
      type: String,
      default: 'ILST',
    },
    page: {
      type: String,
      default: 'buttons'
    },
    theme: {
      type: String,
      default: 'darkest'
    },
    gradient: {
      type: Number,
      default: 0,
    },
    height: {
      type: String,
      default: "300px"
    },
    width: {
      type: String,
      default: ""
    }
  },
  computed: {
    src() {
      return `https://zen-ramanujan-97e3d0.netlify.app/#/${this.page}`
    },
    // name() {
    //   return `https://tender-johnson-4cd350.netlify.com/#/${this.page}/${this.app}/${this.realTheme}`
    // },
    realTheme() {
      return this.theme == 'gradient' ? this.gradient : this.theme;
    }
  },
  components: {
    panelify: require('../components/panelify').default,
  }
}
</script>

<style>
.panel-wrapper {
  /* border: 2px solid red; */
  border-radius: 6px 6px 0px 0px;
  box-sizing: border-box;
  max-width: calc(100% - 20px);
  overflow: hidden;
  box-shadow: 0 1px 1px rgba(0,0,0,0.11), 
              0 2px 2px rgba(0,0,0,0.11), 
              0 4px 4px rgba(0,0,0,0.11);
  }

@media (orientation: landscape) {
  :root, body, html, #app {
    overflow: auto;
    height: auto;
  }
}

@media (orientation: portrait) {
  .panel-wrapper {
    height: 100%;
  }
  
}

.panel-header {
  background: #b8b8b8;
  height: 25px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.panel-dots {
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: center;
}
.panel-title {
  margin-right: 10px;
  color: #232323;
}
.panel-dot {
  width: 14px;
  height: 14px;
  border-radius: 20px;
  margin: 0px 5px;
}
</style>