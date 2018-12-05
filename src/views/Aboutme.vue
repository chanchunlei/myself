<template>
    <div class="myself">
      <swiper :options="swiperOption">
        <swiper-slide>
          <div>
            <div class="head"></div>
            <h1>陈春磊</h1>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </swiper-slide>
        <swiper-slide>2</swiper-slide>
        <swiper-slide>3</swiper-slide>
        <swiper-slide>4</swiper-slide>
        <swiper-slide>5</swiper-slide>
        <swiper-slide>6</swiper-slide>
      </swiper>
    </div>
</template>

<script>
    export default {
        name: "Aboutme",
      data() {
        return {
          swiperOption: {//swiper4
            speed:500,
            height: window.innerHeight,//全屏
            direction: 'vertical',
            mousewheel: true
          }
        }
      },
    }
</script>

<style scoped lang="less">
  @import (reference) "../assets/less/public.less";
  .myself{
    .box();
    height: 100%;
    .swiper-container{
      height: 100%;
    }
    .swiper-slide{
      display: table;
      text-align: center;
      div{
        display: table-cell;
        height: 100px;
        vertical-align: middle;
      }
    }
  }
</style>
