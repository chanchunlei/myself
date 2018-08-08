<template>
  <div class="Top">
      <div class="top_box">
        <ul class="nav">
          <li class="size">首页</li>
          <li>coding</li>
          <li>学无止境</li>
          <li>好文</li>
          <li>时间轴</li>
          <li>关于我</li>
        </ul>
        <div class="search">
          <span class="inp_box"><input type="text"></span>
          <span class="btn" @click="btn()"><i class="iconfont">&#xe637;</i></span>
        </div>
      </div>
  </div>
</template>

<script>
  import api from '../api/api.js'
export default {

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created:function(){
    api.Test({
      query:{
        postId:101
      },
      success: function (res) {
       // console.log(res)
      }
    })
  },
  methods:{
   btn:function(){
     console.log(111)
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import (reference) "../less/public.less";
  .Top{
    .box();
    border-bottom: 1px solid #edeeee;
  }
  .top_box{
    .content();
    position: relative;
  }
  .height(){//公用高度
    height: 80px;
    line-height: 80px;
  }
  .size{
    font-size: 20px;
    color: #999;
  }
  .nav{
    display: flex;
    justify-content: flex-start;
    .height();
  }
  .nav>li{
    margin: 0 15px;
    cursor: pointer;
  }
  .search{
    position: absolute;
    right: 0;
    top: 0;
    width: 25%;
    text-align: right;
    .height();
  }
  .inp_box>input{
    width: 85%;
    border: 1px solid #999;
    line-height: 25px;
    border-radius: 5px;
  }
  .btn{
    cursor: pointer;
  }
  .btn>i{
    font-size: 18px;
  }
</style>
