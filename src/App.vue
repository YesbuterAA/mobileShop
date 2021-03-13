<template>
  <div id="app">
    <root />
  </div>
</template>

<script>
import root from './root.vue'
export default {
  components: {
    root
  },
  methods: {
  },
  updataed() {
    this.Forum()
  }
}
</script>
<style>

* {
  margin: 0;
  padding: 0;
}
#app {
  background-color: #ffffff;
}
#app a.router-link-exact-active {
  color: #007FFF;
}
a {
  text-decoration: none;
}
 a:hover, a:visited, a:link, a:active {
   color: #71777C;
 }
</style>
