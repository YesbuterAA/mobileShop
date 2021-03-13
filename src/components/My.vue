<template>
  <div>
    <div class="avaterhead">
      <div class="avater">
      </div>
        <span class="name" @click="login">华为ceo</span>
        <span class="view">查看主页或编辑资料</span>
    </div>
        <ul>
        <li>我的关注</li>
        <li>我的收藏</li>
        <li>联系我们</li>
        <li>设置</li>
      </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data:[],
      speech: '1132414'
    }
  },
  components: {
  },
  methods: {
    login () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
  .avaterhead {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0, 0, 0.22);
    height: 100%;
  }
  .avater {
    display: inline-block;
    width: 3rem;
    height: 3rem;
    background-image: url(../images/17.jpg);
    background-size: 3rem 3rem;
    background-repeat: no-repeat;
    border-bottom: 1px solid #ccc;
    position: relative;

  }
  .name {
    color: #0F0F0F;
    font-size: 0.6rem;
    position: absolute;
    top: 0.2rem;
    left: 3rem;
  }
  .view {
    color: #ccc;
    font-size: 0.3rem;
    position: absolute;
    top: 1rem;
    left: 3rem;
  }
  ul li {
    width: 100vw;
    height: 2rem;
    margin-top: 1rem;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0, 0, 0.22);
    background-color: #f9f9f9;
    line-height: 2rem;
    font-size: 0.7rem;
    color: #ccc;
  }
</style>