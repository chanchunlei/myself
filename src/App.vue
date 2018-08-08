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
  @import "css/base.css";
  @import "less/public.less";


  @font-face {
    font-family: 'iconfont';  /* project id 783661 */
    src: url('//at.alicdn.com/t/font_783661_ykiagdwk78l.eot');
    src: url('//at.alicdn.com/t/font_783661_ykiagdwk78l.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_783661_ykiagdwk78l.woff') format('woff'),
    url('//at.alicdn.com/t/font_783661_ykiagdwk78l.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_783661_ykiagdwk78l.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
