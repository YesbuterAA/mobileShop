<template>
  <div>
    <div class="head">
      <div class="top">
        <i class="iconfont icon">&#xe921;</i>
      <h6>发布动态</h6>
      <span @click="release">发布</span>
      </div>
      <input type="text" placeholder="你的名字" style="width:100vw;" v-model="noteName">
      <textarea rows="10" cols="30" placeholder="请分享你的想法" v-model="notedata">
      </textarea>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      noteName: '',
      notedata: ''
    }
  },
  methods: {
    release () {
      this.$store.state.noteName.push(this.noteName)
      this.$store.state.notedata.push(this.notedata)
      this.$router.push('/Forum')
    },

  },
  created() {
    
  }
}
</script>
<style>
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
.head {
  height: 10rem;
}
  textarea {
    margin-top: 1rem;
    width: 99%;
    background-color: #f9f9f9;
    border: none;
    outline: none;
  }
  h6 {
    display: inline-block;
    text-align: center;
  }
  .top {
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    align-content: baseline;
    border-bottom: 1px solid #ccc;
    
  }
  h6 {
    font-size: 1rem;
  }
  .icon {
    margin-top: 0.3rem;
    font-size: 1rem;
    line-height: 1rem;
  }
</style>
