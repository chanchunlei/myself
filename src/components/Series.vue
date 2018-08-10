<template>
    <div class="seriesBox">
      <div class="path">
        <div class="begin">
          <a href="javascript:;"><i class="iconfont">&#xe62f;</i></a>
        </div>
        <div class="cutLine"></div>
        <div class="close">
          <a href="javascript:;"><i class="iconfont">&#xe62f;</i></a>
        </div>
      </div>
      <ul class="list">
        <li>
          <img src="../../static/imgs/kong.jpg" alt="封面">
          <div class="cover"><p>坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了</p></div>
        </li>
        <li>
          <img src="../../static/imgs/kong.jpg" alt="封面">
          <div class="cover"><p>坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了</p></div>
        </li>
        <li>
          <img src="../../static/imgs/kong.jpg" alt="封面">
          <div class="cover"><p>坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了</p></div>
        </li>
        <li>
          <img src="../../static/imgs/kong.jpg" alt="封面">
          <div class="cover"><p>坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了</p></div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Series"
    }
</script>

<style scoped lang="less">
  @import (reference) "../less/public.less";
  .homologous(){
    width: calc(50% + 100px);
    height: 120px;
    background-color: #fff;
    position: absolute;
    a{
      color: #666;
      display: block;
      width: 200px;
      height: 120px;
      text-align: center;
      line-height: 120px;
      position: absolute;
      top: 0;
      right: 0;
      i{
        font-size: 24px;
      }
    }
  }
  .seriesBox{
    .content();
    position: relative;
  }
  .path{
    .content();
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
  .begin{
    .homologous();
    top: 0;
    left: 0;

  }
  .close{
    .homologous();
    bottom: -240px;
    right: 0;
  }
  .cutLine{
    width: 200px;
    height: 100%;
    background-color: #fff;
    position: absolute;
    top: 120px;
    left: calc(50% - 100px);
    border-top: 1px solid #ececec;
    &::after{
      left: 50%;
      content: '';
      display: block;
      background-color: #ececec;
      width: 1px;
      height: 100%;
      position: absolute;
      z-index: 1;
      top: 0;
    }
  }
  .list{
    width: 100%;
    height: 100%;
    overflow: hidden;
    li{
      width: 450px;
      height: 400px;
      background-color: #fff;
      box-sizing: border-box;
      img{
        width: 300px;
        height: 300px;
      }
    }
    li:nth-child(n){
      float: left;
      margin-top: 150px;
      border-right: 1px solid #ececec;
    }
    li:nth-child(2n){
      float: right;
      margin-top: 200px;
      border-left: 1px solid #ececec;
    }
  }
</style>
