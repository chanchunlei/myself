<template>
    <div class="seriesBox">
      <div class="path">
        <div class="begin">
          <a href="javascript:;"><i class="iconfont">&#xe62f;</i></a>
        </div>
        <div class="cutLine"></div>
        <div class="close">
          <a href="javascript:;"><i class="iconfont">&#xe693;</i></a>
          <a v-if="false" href="javascript:;"><i class="iconfont">&#xe62f;</i></a>
        </div>
      </div>
      <ul class="list">
          <vue-lazy-component tagName="li" @after-enter="init(0)" :class='[idx==0 ? className : ""]'>
            <div class="title_cover">
              <img src="../../static/imgs/kong.jpg" alt="封面">
              <p>coding</p>
              <div class="synopsis"><span>坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了</span></div>
            </div>
            <div class="cover"><p>坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了</p></div>
            <time>
              <span>2018</span>
              <span>July</span>
              <span>18</span>
            </time>
          </vue-lazy-component>
          <vue-lazy-component tagName="li" @after-enter="init(1)" :class='[idx==1 ? className : ""]'>
            <div class="title_cover">
              <img src="../../static/imgs/kong.jpg" alt="封面">
              <p>道阻且长</p>
              <div class="synopsis"><span>坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了</span></div>
            </div>
            <div class="cover"><p>坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了</p></div>
            <time>
              <span>2018</span>
              <span>July</span>
              <span>18</span>
            </time>
          </vue-lazy-component>
          <vue-lazy-component tagName="li" @after-enter="init(2)" :class='[idx==2 ? className : ""]'>
            <div class="title_cover">
              <img src="../../static/imgs/kong.jpg" alt="封面">
              <p>受想行识</p>
              <div class="synopsis"><span>坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了</span></div>
            </div>
            <div class="cover"><p>坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了</p></div>
            <time>
              <span>2018</span>
              <span>July</span>
              <span>18</span>
            </time>
          </vue-lazy-component>
          <vue-lazy-component tagName="li" @after-enter="init(3)" :class='[idx==3 ? className : ""]'>
            <div class="title_cover">
              <img src="../../static/imgs/kong.jpg" alt="封面">
              <p>受想行识</p>
              <div class="synopsis"><span>坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了</span></div>
            </div>
            <div class="cover"><p>坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这</p></div>
            <time>
              <span>2018</span>
              <span>July</span>
              <span>18</span>
            </time>
          </vue-lazy-component>
          <vue-lazy-component tagName="li" @after-enter="init(4)" :class='[idx==4 ? className : ""]'>
            <div class="title_cover">
              <img src="../../static/imgs/kong.jpg" alt="封面">
              <p>受想行识</p>
              <div class="synopsis"><span>坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了</span></div>
            </div>
            <div class="cover"><p>坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了</p></div>
            <time>
              <span>2018</span>
              <span>July</span>
              <span>18</span>
            </time>
          </vue-lazy-component>
          <vue-lazy-component tagName="li" @after-enter="init(5)" :class='[idx==5 ? className : ""]'>
            <div class="title_cover">
              <img src="../../static/imgs/kong.jpg" alt="封面">
              <p>受想行识</p>
              <div class="synopsis"><span>坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了</span></div>
            </div>
            <div class="cover"><p>坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这</p></div>
            <time>
              <span>2018</span>
              <span>July</span>
              <span>18</span>
            </time>
          </vue-lazy-component>
          <vue-lazy-component @after-enter="init(6)" :class='[idx==6? className : ""]' tagName="li">
            <div class="title_cover">
              <img src="../../static/imgs/kong.jpg" alt="封面">
              <p>受想行识</p>
              <div class="synopsis"><span>坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了</span></div>
            </div>
            <div class="cover"><p>坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了</p></div>
            <time>
              <span>2018</span>
              <span>July</span>
              <span>18</span>
            </time>
          </vue-lazy-component>
          <vue-lazy-component tagName="li" @after-enter="init(7)" :class='[idx==7 ? className : ""]'>
            <div class="title_cover">
              <img src="../../static/imgs/kong.jpg" alt="封面">
              <p>受想行识</p>
              <div class="synopsis"><span>坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了</span></div>
            </div>
            <div class="cover"><p>坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这</p></div>
            <time>
              <span>2018</span>
              <span>July</span>
              <span>18</span>
            </time>
          </vue-lazy-component>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Series",
      data(){
          return{
            className: 'animated zoomIn',
            list: [
              { pic:"../../static/imgs/kong.jpg",synopsis:"坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147", title: "受想行识",cover:"坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意", className:"animated zoomIn"},
              { pic:"../../static/imgs/kong.jpg",synopsis:"坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147", title: "codding",cover:"坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意", className:"animated zoomIn"},
              { pic:"../../static/imgs/kong.jpg",synopsis:"坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147", title: "受想行识",cover:"坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意", className:"animated zoomIn"},
              { pic:"../../static/imgs/kong.jpg",synopsis:"坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147", title: "道阻且长",cover:"坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意", className:"animated zoomIn"},
              { pic:"../../static/imgs/kong.jpg",synopsis:"坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147", title: "受想行识",cover:"坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意", className:"animated zoomIn"},
              { pic:"../../static/imgs/kong.jpg",synopsis:"坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147", title: "codding",cover:"坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意", className:"animated zoomIn"},
              { pic:"../../static/imgs/kong.jpg",synopsis:"坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147", title: "受想行识",cover:"坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意", className:"animated zoomIn"},
              { pic:"../../static/imgs/kong.jpg",synopsis:"坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147", title: "codding",cover:"坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意想不到的事情发生了坚持绘画147天,这些意", className:"animated zoomIn"},
            ],
            idx: 0
          }
      },
      methods:{
        init: function(idx){
          console.log(idx);
          this.idx = idx;
        }
      }
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
      left: 0;
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
    right: 0;

  }
  .close{
    .homologous();
    bottom: -242px;
    left: 0;
  }
  .cutLine{
    width: 200px;
    height: 100%;
    background-color: #fff;
    position: absolute;
    top: 120px;
    left: calc(50% - 100px);
    border-top: 1px solid #ececec;
    border-bottom: 1px solid #ececec;
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
      position: relative;
      .cover{
        padding: 20px;
        box-sizing: border-box;
        font-size: 20px;
        color: #666;
        p{
          .indent(2em,2);
        }
      }
      time{
        position: absolute;
        top: 45%;
        border-bottom: 1px solid #ececec;
        width: 100px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        span:nth-child(2n){
          color: #9a9a9a;
          font-size: 20px;
        }
      }
    }
    li:nth-child(n){
      float: left;
      margin-top: 120px;
      border-right: 1px solid #ececec;
      border-radius: 5px 0 0 5px;
      time{
        right: -100px;
        text-align: left;
        padding-left: 10px;
        color: #404040;
        font-family: Good Pro Condensed,sans-serif;
      }
    }
    li:nth-child(2n){
      float: right;
      margin-top: 170px;
      border-left: 1px solid #ececec;
      border-radius: 0 5px 5px 0;
      time{
        left: -100px;
        text-align: right;
        padding-right: 10px;
      }
    }
  }
  .title_cover{
    width: 100%;
    height: 300px;
    position: relative;
    img{
      width: 300px;
      height: 300px;
      border-radius: 5px;
    }
    p{
      position: absolute;
      top: 0;
      height: 12px;
      line-height: 12px;
      letter-spacing: 1px;
      color: #fff;
      background-color: lightblue;
      padding: 10px;
      font-size: 14px;
    }
    .synopsis{
      position: absolute;
      top: 0;
      right: 0;
      width: calc(100% - 300px);
      height: 100%;
      padding: 20px 10px;
      box-sizing: border-box;
      color: #999;
      font-size: 16px;
      span{
        .indent(2em,10);
      }
    }
  }
</style>
