<template>
  <div id="app">
    <h1>meep:</h1>
    <div v-if="show">
      <Meep />
    </div>
    <h1>foo:</h1>
    <Foo />
    <h1>bar:</h1>
    <Bar />
    <h1>Vue.options.components</h1>
    {{comps}}    
    <hr />
    screenshots: <a href="without-devtools.png">without devtools</a> | <a href="with-devtools.png">with devtools</a>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'app',
  mounted() {
    setTimeout(async () => {
      let r = Vue.component('Meep', { template: '<div>MEEP!</div>' }); // <-- THIS FAILS TO WORK IF DEVTOOLS PANEL IS OPEN BEFORE THIS IS DONE
      this.$nextTick(() => this.show = true);
    }, 1000)    
    setInterval(() => {
      this.comps = Object.keys(Vue.options.components);
    }, 1000);
  },
  data() {
    return {
      show: false,
      comps: []
    }
  },
}
</script>
