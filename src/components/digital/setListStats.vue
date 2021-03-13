<template>
  <div>
    排行版
    <button @click="btn">11123</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      string: '排行榜'
    }
  },
  methods: {
    btn () {
      this.$emit('ffbtn',this.string)
    }
  }
}
</script>