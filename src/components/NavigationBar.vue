<template>
  <div class="footer">
    <ul>
      <li @click="jumpHomePage">
        <router-link to="/Homepage">
                <i class="iconfont">&#xe8eb;</i><span>首页</span>
        </router-link>
      </li>
      <li @click="digital">
        <router-link to="/Digital">
                <i class="iconfont">&#xe925;</i><span>数码</span>
        </router-link>
      </li>
      <li>
        <router-link to="/Digging">
                <i class="iconfont">&#xe931;</i><span>发现</span>
        </router-link>
      </li>
      <li>
        <router-link to="/Forum">
          <i class="iconfont">&#xe91f;</i><span>论坛</span>
        </router-link>
        </li>
      <li>
        <router-link to="/My">
          <i class="iconfont">&#xe924;</i><span>我的</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    jumpHomePage () {
      this.$router.push('/Homepage')
    },
    digital () {
      this.$router.push('/Digital')
    }
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
.footer {
  box-shadow: 5px 0 10px -5px #000;
  background: #dfdfdf;
  position: fixed;
  bottom: 0px;
  overflow: hidden;
  padding-top: 0.8rem;
}
.top {
  width: 7.3rem;
  height: 1rem;
}
ul {
  width: 10.3rem;
  display: flex;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
}
ul li {
  display: block;
  list-style: none;
  font-size: 0.4rem;
}
ul li i {
  display: block;
  line-height: 0;
  font-size: 0.9rem !important;
  position: relative;
  top: -0.3rem;
}
ul>li>i>span{
  display: block;
  line-height: 20px;
  font-size: 16px !important;
  color: #000;
}
</style>
