<template>
  <div>
    <ul>
      <li>
        <i class="iconfont iconfontsize">&#xe603;<p>手机</p></i>
      </li>
      <li>
        <i class="iconfont">&#xe607;<p>耳机</p></i>
      </li>
      <li>
        <i class="iconfont">&#xe606;<p>电脑</p></i>
      </li>
      <li>
        <i class="iconfont">&#xe604;<p>智能家居</p></i>
      </li>
      <li>
        <i class="iconfont">&#xe60e;<p>穿戴</p></i>
      </li>
      <li>
        <i class="iconfont">&#xe613;<p>平板设备</p></i>
      </li>
      <li>
        <i class="iconfont">&#xe60b;<p>数码配件</p></i>
      </li>
      <li>
        <i class="iconfont">&#xe612;<p>游戏·影音</p></i>
      </li>
      <li>
        <i class="iconfont">&#xe60a;<p>网络设备</p></i>
      </li>
      <li>
        <i class="iconfont">&#xe928;<p>全部</p></i>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  ul {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  ul li {
    width: 1.8rem;
    list-style: none;

  }
  ul li p {
    font-size: 0.2rem ;
    color: #ccc;
  }
  @font-face {font-family: 'iconfont';
    src: url('../../font/iconfont.eot'); /* IE9*/
    src: url('../../font/iconfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('../../font/iconfont.woff') format('woff'), /* chrome、firefox */
    url('../../font/iconfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url('../../font/iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
}
.iconfont{
    font-family:"iconfont";
    font-size:0.8rem;font-style:normal;
}
</style>
