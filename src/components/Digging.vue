<template>
  <div class="news">
    <ul>
      <li v-for="(item, index) in newsArray" :key="index">
        <a :href='item.path'>
          <img :src='item.image'  alt="" style="">
        <span>{{item.title}}</span>
        </a>
      </li>
    </ul>

  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.use('axios')

export default {
  data () {
    return {
      newsArray:[]
    }
  },
  methods: {
    getNews () {
      axios({
        url: 'https://api.apiopen.top/getWangYiNews',
        params: {
          page: 1,
          count: 10,
        }
      }).then( res => {
        for(let i = 0; i<=res.data.result.length-1;i++) {
          this.newsArray.push(res.data.result[i])
        }
      })
    }
  },
  created () {
    this.getNews()
    console.log(this.newsArray)
  }
}
</script>

<style scoped>
  .news {
    width: 10rem;
  }
  ul {
    padding-bottom: 1.3rem;
    width: 7rem;
    height: 1rem;
  }
  ul li {
    display: block;
    width: 10rem;
    list-style: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  ul li span {
display: block;
  }
</style>