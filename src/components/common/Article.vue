<template>
  <div class="thumbnail">
    <div class="titleH3">
      前端插件
    </div>
    <ul class="listBox">
      <li>
        <div class="cover"><img src="../../../static/imgs/kong.jpg" alt=""></div>
        <p class="title">长大不过如此，沉迷过的偶像一个个消失</p>
        <p class="contents">面对朋友圈忽然兴起的潮流、忽然疯转的事件，又忽然有新的事物将其取代、或是忽然一切沉寂如止水，我们甚至没留给自己多余的时间平静与思考。谁都不过被爆炸的资讯拥簇着、撕裂着，也不痛不痒。几乎所有思想趋于单向度。</p>
        <p class="time">2018-08-28</p>
      </li>
      <li>
        <div class="cover"><img src="../../../static/imgs/kong.jpg" alt=""></div>
        <p class="title">长大不过如此，沉迷过的偶像一个个消失</p>
        <p class="contents">面对朋友圈忽然兴起的潮流、忽然疯转的事件，又忽然有新的事物将其取代、或是忽然一切沉寂如止水，我们甚至没留给自己多余的时间平静与思考。谁都不过被爆炸的资讯拥簇着、撕裂着，也不痛不痒。几乎所有思想趋于单向度。</p>
        <p class="time">2018-08-28</p>
      </li>
      <li>
        <div class="cover"><img src="../../../static/imgs/kong.jpg" alt=""></div>
        <p class="title">长大不过如此，沉迷过的偶像一个个消失</p>
        <p class="contents">面对朋友圈忽然兴起的潮流、忽然疯转的事件，又忽然有新的事物将其取代、或是忽然一切沉寂如止水，我们甚至没留给自己多余的时间平静与思考。谁都不过被爆炸的资讯拥簇着、撕裂着，也不痛不痒。几乎所有思想趋于单向度。</p>
        <p class="time">2018-08-28</p>
      </li>
      <li>
        <div class="cover"><img src="../../../static/imgs/kong.jpg" alt=""></div>
        <p class="title">长大不过如此，沉迷过的偶像一个个消失</p>
        <p class="contents">面对朋友圈忽然兴起的潮流、忽然疯转的事件，又忽然有新的事物将其取代、或是忽然一切沉寂如止水，我们甚至没留给自己多余的时间平静与思考。谁都不过被爆炸的资讯拥簇着、撕裂着，也不痛不痒。几乎所有思想趋于单向度。</p>
        <p class="time">2018-08-28</p>
      </li>
      <li>
        <div class="cover"><img src="../../../static/imgs/kong.jpg" alt=""></div>
        <p class="title">长大不过如此，沉迷过的偶像一个个消失</p>
        <p class="contents">面对朋友圈忽然兴起的潮流、忽然疯转的事件，又忽然有新的事物将其取代、或是忽然一切沉寂如止水，我们甚至没留给自己多余的时间平静与思考。谁都不过被爆炸的资讯拥簇着、撕裂着，也不痛不痒。几乎所有思想趋于单向度。</p>
        <p class="time">2018-08-28</p>
      </li>
      <li>
        <div class="cover"><img src="../../../static/imgs/kong.jpg" alt=""></div>
        <p class="title">长大不过如此，沉迷过的偶像一个个消失</p>
        <p class="contents">面对朋友圈忽然兴起的潮流、忽然疯转的事件，又忽然有新的事物将其取代、或是忽然一切沉寂如止水，我们甚至没留给自己多余的时间平静与思考。谁都不过被爆炸的资讯拥簇着、撕裂着，也不痛不痒。几乎所有思想趋于单向度。</p>
        <p class="time">2018-08-28</p>
      </li>
      <li>
        <div class="cover"><img src="../../../static/imgs/kong.jpg" alt=""></div>
        <p class="title">长大不过如此，沉迷过的偶像一个个消失</p>
        <p class="contents">面对朋友圈忽然兴起的潮流、忽然疯转的事件，又忽然有新的事物将其取代、或是忽然一切沉寂如止水，我们甚至没留给自己多余的时间平静与思考。谁都不过被爆炸的资讯拥簇着、撕裂着，也不痛不痒。几乎所有思想趋于单向度。</p>
        <p class="time">2018-08-28</p>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Article"
    }
</script>

<style scoped lang="less">
  @import (reference) "../../less/public.less";
  .thumbnail{
    .box();
    .titleH3{
      .content();
      line-height: 80px;
      font-size: 22px;
      color: #333;
      font-weight: 700;
      text-align: center;
     }
    .listBox{
      .content();
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      li{
        width: 25%;
        padding: 15px;
        box-sizing: border-box;
        margin-bottom: 20px;
      }
    }
    .cover{
      width: 100%;
      text-align: center;
      img{
        width: 220px;
        height: 200px;
      }
    }
    .title{
      .indent(@length:0em,@line:1);
      font-size: 18px;
      font-weight: 700;
      line-height: 30px;
    }
    .contents{
      .indent(@length:2em,@line:3);
      font-size: 14px;
      font-weight: normal;
    }
    .time{
      line-height: 35px;
      font-size: 14px;
      text-align: right;
      border-bottom: 1px solid #eee;
    }
  }
</style>
