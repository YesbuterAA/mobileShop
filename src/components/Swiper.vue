<template>
  <div class="swipe swiper">
<van-swipe class="my-swipe" indicator-color="white" autoplay="3000">

  <van-swipe-item v-for="(image,index) in images" :key = "index"><img v-lazy = "image" style="height = 100%;width:100%" /></van-swipe-item>
</van-swipe>
  </div>
</template>

<script>
import Vue from 'vue'
import 'vant/lib/index.css'
import { Swipe, SwipeItem, Lazyload } from 'vant'
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
export default {
  data () {
    return {
      images: [
        require('@/images/1.jpg'),
        require('../images/2.jpg'),
        require('../images/3.jpg')
      ]
    }
  }
}
</script>
<style>
  .swiper {
    height: 5.33rem;
  }

</style>
