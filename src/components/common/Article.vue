<template>
  <div class="thumbnail">
    <div class="navBox">
      <div class="listNav" v-for="(item,index) in list" :key="index">{{item.title}}</div>
    </div>
    <div class="titleH3">
      前端插件{{classify}}
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
    <v-paging></v-paging>
  </div>
</template>

<script>
  import vpaging from './Paging'
  import api from '../../api/api'
    export default {
        name: "Article",
      components:{
          "v-paging":vpaging
      },
      data(){
          return{
            list: [
              {id:1,title:"前端插件"},
              {id:2,title:"小程序"},
              {id:3,title:"前端框架"},
              {id:4,title:"canvas"}]
          }
      },
      created(){
         api.classify({
           success:function(res){
             //console.log(res);
             if(res.status == 200){
               this.list = res.data.nav
             }
           }.bind(this)
         })
      },
      computed:{
         classify(){
           return this.$store.state.classifyId;
         }
      },
      watch:{
         classify(val){
           console.log(this.classify);
         }
      }
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
      color: #666;
    }
    .time{
      line-height: 35px;
      font-size: 14px;
      text-align: right;
      border-bottom: 1px solid #eee;
      color: #999;
    }
  }
  .navBox{
    .content();
    width: 100%;
    background-color: #f2f2f2;
    text-align: center;
    .listNav{
      display: inline-block;
      padding: 5px 15px;
      line-height: 25px;
      color: #666;
      cursor: pointer;
    }
  }
</style>
