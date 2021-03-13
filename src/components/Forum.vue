<template>
  <div class="forum">
    <div class="background">
      <i class="iconfont camera" @click="dynamic">&#xe8fd;</i>
      <img :src='this.path' alt="" style="width:100%;height:150px">
    </div>
    <div class="avatar">
      <span class="name">华为ceo</span>
    </div>
    <div class="circleFriends" v-for="(value, key, index) in circleFriends" :key="key">
      <div>
        <div class="friends">
          <div class="friendsAvatar"  v-bind:style="{ backgroundImage: 'url(' + value.coverImgUrl + ')'}"></div>
          {{index}}
          <span>{{value.name}}</span>
          <p>{{value.speech}}</p>
        </div>
        <div>
        </div>
      </div>
    </div>
      <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return { 
      path: require('../images/16.png'),
      random: Math.floor(Math.random()*100),
      fnoteName:[],
      fnotedata:[],
      fcirecleFriends: [],
      circleFriends: [
        {
          id: 18,
          name: '雷军',
          coverImgUrl: require("../images/22.jpg"),
          speech: '冲啊，小米肯定是第一名'
        },
        {
          id: 18,
          name: '黄章',
          coverImgUrl: require("../images/23.jpg"),
          speech: '魅族18出来了，大家喜欢吗'
        },
        {
          id: 18,
          name: '卢伟兵',
          coverImgUrl: require("../images/18.jpg"), 
          speech: '哈哈哈，红米k40还喜欢吗'
        },
        {
          id: 18,
          name: '任正非',
          coverImgUrl: require("../images/19.jpg"),
          speech: '华为卖不出去了，谁来帮帮我'
        },
        {
          id: 18,
          name: '张富贵',
          coverImgUrl: require("../images/20.jpg"),
          speech: '手持2000，大家说买什么手机好啊'
        },
        {
          id: 18,
          name: '李正',
          coverImgUrl: require("../images/8.png"),
          speech: '真的很喜欢魅族'
        },
        {
          id: 18,
          name: '郭麒麟',
          coverImgUrl: require("../images/11.png"),
          speech: '大家买东西，可以来苏宁易购啊'
        },
        {
          id: 18,
          name: '李毅',
          coverImgUrl: require("../images/6.png"),
          speech: '我是苹果粉'
        },
        {
          id: 18,
          name: '宁逸',
          coverImgUrl: require("../images/3.jpg"),
          speech: '看来智能手表只能选苹果了，一分钱一分货'
        },
        {
          id: 18,
          name: '苏小妹',
          coverImgUrl: require("../images/2.jpg"),
          speech: '买到华为了，好开心'
        }
      ]
    }
  },
  methods: {
    dynamic () {
      this.$router.push('/Dynamic')
    },
    obtain () {
      this.fnoteName = this.$store.state.noteName
      this.fnotedata = this.$store.state.notedata
      for(let item of this.fnoteName){
        for(let i of this.fnotedata) {
          this.fcirecleFriends.push({
            name: item,
            speech: i
          })
        }
      }
      console.log(this.fcirecleFriends)
      this.circleFriends.push(this.fcirecleFriends)
    },
    Forum () {
      window.onload=setTimeout(function(){
      window.scrollTo(0,1)  //  修改baidu500为指zhi定dao高zhuan度shu
},5);
    
  },
    fordata () {
      for(let i in this.fcirecleFriends){
        this.circleFriends.push(this.fcirecleFriends[i],)
        console.log(i)
      }
    }
  },
  components: {
  },
  created () {
    this.obtain()
    this.Forum()
    this.fordata()
  },
  updata () {


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
.forum {
  background-color: #f9f9f9;
  margin-bottom: 2rem;
}
.camera {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 1rem;
}
.avatar {
  width: 2rem;
  height: 2rem;
  background-image: url('../images/17.jpg');
  border-radius: 10px;
  position: absolute;
  top: 3rem;
  right: 0.6rem;
  background-repeat:no-repeat;

}
.name {
  position: absolute;
  top: 0.4rem;
  right: 2rem;
  font-stretch: expanded;
  color: aliceblue;
  font-weight: 1000;
  width: 2rem;
}
.circleFriends {
  width: 100%;
}
.friendsAvatar {
  width: 2rem;
  height: 2rem;
  background-repeat: no-repeat;
  background-size:3rem 2rem;
}
.friends {
  width: 98%;
  position: relative;
  border-left: 0.01rem  solid #ccc;
  border-right: 0.01rem solid #ccc;
  margin-bottom: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .12) , 0 1px 2px rgba(0, 0, 0, .24);
}
.friends>span {
  position: absolute;
  top: 0rem;
  left: 2rem;
  font-weight: 2000;
  font-size: 0.5rem;
  color: #8CB6C0;
}
.friends>p {
  position: absolute;
  top: 0.7rem;
  left:2rem;
  color: #444344;
  font-size: 0.4rem;
}
</style>
