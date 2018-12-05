<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" type="text/less">
  @import "assets/css/base.css";
  @import "assets/less/public.less";
  #app{
    width: 100%;
    height: 100%;
  }
  @font-face {
    font-family: 'iconfont';  /* project id 783661 */
    src: url('//at.alicdn.com/t/font_783661_6on029r06kl.eot');
    src: url('//at.alicdn.com/t/font_783661_6on029r06kl.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_783661_6on029r06kl.woff') format('woff'),
    url('//at.alicdn.com/t/font_783661_6on029r06kl.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_783661_6on029r06kl.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
