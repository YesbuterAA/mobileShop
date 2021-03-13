<template>
  <div class="Homepage">

    <!-- <header>
    <i class="iconfont myright">&#xe8f8;</i>
    <input type="search" placeholder="搜索">
    </header> -->
    <h1>手机商城</h1>
    <body>
      <Swiper />
    </body>
    <div class="recommend">
      <Frame />
  </div>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import Swiper from './Swiper'
import Frame from './HomePage/Frame'
export default {
  components: {
    Swiper,
    Frame
  }
}
</script>
<style scoped>
@font-face {font-family: 'iconfont';
    src: url('../font/iconfont.eot'); /* IE9*/
    src: url('../font/iconfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('../font/iconfont.woff') format('woff'), /* chrome、firefox */
    url('../font/iconfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url('../font/iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
}
.iconfont{
    font-family:"iconfont";
    font-size:16px;font-style:normal;
}
  .Homepage {
    font-size: 0.5rem;
    margin: 0;
    padding: 0;
  }
  header {
    display: flex;
  }
  input {
    border-color: #007FFF;
    width: 6.11rem;
    border-radius: 22px;
    text-align: center;
    outline: none;
    display: block;
    margin: 0 auto;
  }
  .myright {
    padding:0 14px;
    color: #007fff;
  }
  img {
    width: 7.12rem;
    height: 3rem;
  }
  h1 {
    font-size: 0.9rem;
    text-align: center;
    color: #5D656B;
  }
  .price {
    color: #F9986D;
  }
  .buyNumber {
    margin-left: 10px;
    color: #999999;
  }
  .frame {
    font-size: 10px;
    padding: 10px;
  }
  .recommend>p {
    font-size: 0.1rem;
    color: #999999;
  }
  .recommend {
    width: 100vw;
    visibility: visible;
    display: flex;
    flex-wrap: wrap;
  }
</style>
