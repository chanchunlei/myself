<template>
  <div class="middleImg">
     <div class="loopImg_box">
       <div class="loopBox">
          <ul class="loopImg">
            <li v-for="item in runImg" class="show" @click="runDetail(item.articleId)">
              <img :src="item.cover" alt="封面">
              <div class="title"><p>{{item.titles}}</p></div>
            </li>
          </ul>
          <span class="left"><i class="iconfont">&#xe639;</i></span>
          <span class="right"><i class="iconfont">&#xe692;</i></span>
       </div>
     </div>
    <ul class="thumbnail">
      <li v-for="item in list" @click="runDetail(item.articleId)">
         <img :src="item.cover" alt="封面">
         <div class="cover"><p>{{item.titles}}</p></div>
      </li>
    </ul>
  </div>
</template>

<script>
  import api from '../../api/api'
    export default {
        name: "Middle",
      data(){
          return{
            runImg:[],
            list:[]
          }
      },
      created(){
        api.Banner({
          success:function(res){
            //console.log(res)
            if(res.status == 200){}
            this.runImg = res.data.runImg;
            this.list = res.data.right;
          }.bind(this)
        })
      },
      methods:{
        runDetail:function(articleId){//去详情页
          const article = localStorage.setItem('myArticle',articleId);
          this.$router.push('/Article');
        },
      }
    }
</script>

<style scoped lang="less">
  @import (reference) "../../assets/less/public.less";
   .middleImg{
     .content();
     margin-top: 40px;
     overflow: hidden;
   }
  .size(){
    width: 550px;
    height: 550px;
  }
  .boost(){
    transform: scale(1.1,1.1);
    transition: transform 0.5s;
  }
  .covers(@padding:40px,@fontS:28px,@height:160px){
    position: absolute;
    padding: @padding;
    box-sizing: border-box;
    font-size: @fontS;
    left: 0;
    bottom: 0;
    width: 100%;
    height: @height;
    background-color: rgba(0,0,0,.6);
    color: #fff;
  }
  .arrow(){
    position: absolute;
    top: 50%;
    margin-top: -25px;
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    line-height: 50px;
    background-color: rgba(0,0,0,.4);
    color: #fff;
    text-align: center;
    z-index: 20;
    cursor: pointer;
    &>i{
      font-size: 22px;
    }
  }
  .loopBox{
    position: relative;
    float: left;
    .size();
  }
  .loopImg{
    position: relative;
    .size();
    li{
      position: absolute;
      .size();
      z-index: 1;
      opacity: 0;
      overflow: hidden;
      img {
        .size();
        &:hover {
          .boost();
        }
      }
    }
    .show{
      z-index: 10;
      opacity: 1;
      cursor: pointer;
    }
  }
  .title{
    .covers(40px,28px,160px);
    p{
      .indent(2em,2);
    }
  }
  .left{
    .arrow();
    left: 15px;
  }
  .right{
    .arrow();
    right: 15px;
  }
  .thumbnail{
    float: left;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .size();
    li {
      width: 275px;
      height: 275px;
      overflow: hidden;
      position: relative;
      cursor: pointer;
      img{
        width: 275px;
        height: 275px;
        &:hover{
          .boost();
        }
      }
    }
  }
  .cover{
    .covers(15px,16px,80px);
    p{
      .indent(2em,2);
    }
  }
</style>
