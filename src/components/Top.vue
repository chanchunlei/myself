<template>
  <div class="Top">
      <div class="top_box">
        <ul class="nav">
          <li><router-link class="size" to="/Home">首页</router-link></li>
          <li><router-link to="/Codding">coding</router-link></li>
          <li><router-link to="/Longway">道阻且长</router-link></li>
          <li><router-link to="/Thinking">受想行识</router-link></li>
          <li>时间轴</li>
          <li>关于我</li>
        </ul>
        <div class="search">
          <span class="animated inp_box" :class="className">
            <input class="inp" type="text" placeholder="搜索是个好东西">
            <input class="btn_s" type="button" value="搜索">
          </span>
          <span class="btn"><i @click="btn()" v-if="!isShow" class="iconfont">&#xe637;</i><i @click="close()" v-if="isShow" class="iconfont">&#xe690;</i></span>
        </div>
      </div>
  </div>
</template>

<script>
  import api from '../api/api.js'
export default {
  name: "Top",
  data () {
    return {
      isShow: false,
      className: "isHide",
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
   btn: function() {
     this.className = "zoomIn";
     this.isShow = !this.isShow;
   },
   close: function() {
     this.className = "isHide";
     this.isShow = !this.isShow;
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

  .nav{
    display: flex;
    justify-content: flex-start;
    .height();
    li{
      margin: 0 15px;
      cursor: pointer;
      .size{
        font-size: 20px;
        color: #999;
      }
    }
  }
  .search{
    position: absolute;
    right: 0;
    top: 0;
    width: 25%;
    text-align: right;
    .height();
  }
  .inp_box{
    position: relative;
  }
  .inp{
    width: 90%;
    padding-right: 60px;
    box-sizing: border-box;
    border: 1px solid #999;
    line-height: 25px;
    border-radius: 5px;
    padding-left: 5px;
    font-size: 14px;
    color: #666;
  }
  .btn_s{
    width: 60px;
    position: absolute;
    top: 0;
    right: 6px;
    border: none;
    background-color: #333;
    color: #fff;
    line-height: 25px;
    border-radius: 3px;
    .font-size()
  }
  .isHide{
    display: none;
  }
  .btn{
    cursor: pointer;
    i{
      font-size: 18px;
    }
  }
</style>
