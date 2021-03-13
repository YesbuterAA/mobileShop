<template>
  <div class="root">
    <div>
      <router-view />
    </div>
    <navigationBar />
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    NavigationBar
  }
}
</script>

<style scoped>
.router-link-active {
  color: aquamarine;
}
</style>
