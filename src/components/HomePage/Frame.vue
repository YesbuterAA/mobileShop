<template>
  <div>
    <ul>
      <li v-for="(value, key, index) in mobileTypes" :key = "key">
        <div class="frame">
        <img :src='value.path' alt="" style="width:130px;height:150px">
        <p>{{value.name}}</p>
        <span class="price">￥{{value.price}}{{index}}</span><span class="buyNumber">{{value.buyBumber}} 人已经购买</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      number: Math.floor(Math.random()*1000),
      mobileTypes: [
        {
          id: 1,
          name:'HUAWEI nova8 pro',
          path: require('../../images/4.png'),
          price: this.$store.state.HUAWEInova8proPrice,
          buyBumber: 342
        },
        {
          id: 2,
          name: 'HUAWEI 智能眼镜 2代',
          path: require('../../images/6.png'),
          price: this.$store.state.headsetPirce,
          buyBumber: 4234
        },
        {
          id: 3,
          name: 'HUAWEI Sound XX',
          path: require('../../images/5.png'),
          price: this.$store.state.glassesPirce,
          buyBumber: 1433
        },
        {
          id: 4,
          name: 'MateBookX pro 2021款',
          path: require('../../images/7.png'),
          price: this.$store.state.metaBootxPirce,
          buyBumber: 8785
        },
        {
          id: 5,
          name: 'HUAWEI Mate 30E Pro 5G',
          path: require('../../images/8.png'),
          price: this.$store.state.meta30EproPirce,
          buyBumber: 1803
        },
        {
          id: 6,
          name: 'HUAWEIP40 Pro+',
          path: require('../../images/9.png'),
          price: this.$store.state.HUAWEP40Price,
          buyBumber: 6662
        },
        {
          id: 7,
          name: 'FreeBUds Studio ',
          path: require('../../images/11.png'),
          price: this.$store.state.FreeBUdsPrice,
          buyBumber: 9983
        },
        {
          id: 8,
          name: '华为智慧屏X65',
          path: require('../../images/13.png'),
          price: this.$store.state.X65Price,
          buyBumber: 4135
        },
        {
          id: 9,
          name: '华为平板M6 8.4',
          path: require('../../images/14.png'),
          price: this.$store.state.M6Price,
          buyBumber: 7743
        },
        {
          id: 10,
          name: '华为平板 M6 高能版',
          path: require('../../images/15.png'),
          price: this.$store.state.HM6Price,
          buyBumber: 135
        },
      ]
      
    }
  }
}
</script>

<style scoped>
  ul {
    display: flex;
    flex-wrap: wrap;
    float:left;
    margin-bottom: 80px;
  }
  ul li {
    width:4.3rem;
    padding: 0.3rem;
    background-color: #F9F9F9;
    border: 1px double #ffffff;
  }
  img {
    display: block;
    padding-top: 20px;
    margin: 0 auto;
  }
  .frame {
    height: 7rem;
  }
  p {
    text-align: center;
    font-size: 0.1rem;
  }
  .price {
    color: #F9986D;
  }
  .buyNumber {
    color: #999999;
    font-size: 0.03rem;
    margin-left: 20px;
  }
</style>