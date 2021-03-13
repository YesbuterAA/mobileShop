<template>
  <div>
    <header>
      <router-link to='/Digital/idigitalfrome'><span>数码</span></router-link>
      <router-link to='/Digital/phone'><span>手机</span></router-link>
      <router-link to="/Digital/setListStats"><span>排行版</span></router-link>
    </header>
    <phone >
    </phone>
    <router-view  :cnumber="number" :ccount="count" @ffbtn="fbtn"/>
  </div>
</template>

<script>
import phone from './digital/phone.vue'
export default {
  data () {
    return {
      number: 1,
      count: 0
    }
  },
  components: {
    phone
  },
  methods: {
    fbtn (item) {
      console.log(item)
    }
  }
}
</script>
<style scoped>
header{
  height: 1rem;
  border-bottom: 0.1rem solid #ccc;
}
  header span{
    margin: 1rem;
    padding-top: 0.1rem;
    text-align: center;
    line-height: 1rem;
  }
</style>