<template>
    <div class="loading">
      <div>
        <img src='../../../static/imgs/loading1.png' alt="加载中...">
      </div>
    </div>
</template>

<script>
    export default {
        name: "loading"
    }
</script>

<style scoped lang="less">
   .loading {
     position: fixed;
     top: 0;
     left: 0;
     z-index: 100;
     background-color: #fff;
     width: 100%;
     height: 100%;
     display: table;
     text-align: center;
     background: linear-gradient(to bottom, rgba(255, 255, 255, 0.7) 5%, rgba(255, 255, 255, 1) 95%);
     div {
       display: table-cell;
       height: 100px;
       vertical-align: middle;
       img {
         width: 100px;
         height: 100px;
         opacity: .4;
         -webkit-transition-property: -webkit-transform;
         -webkit-transition-duration: 1s;
         -moz-transition-property: -moz-transform;
         -moz-transition-duration: 1s;
         -webkit-animation: rotate 1s linear infinite;
         -moz-animation: rotate 1s linear infinite;
         -o-animation: rotate 1s linear infinite;
         animation: rotate 1s linear infinite;

         @-webkit-keyframes rotate {
           from {
             -webkit-transform: rotate(0deg)
           }
           to {
             -webkit-transform: rotate(360deg)
           }
         }
         @-moz-keyframes rotate {
           from {
             -moz-transform: rotate(0deg)
           }
           to {
             -moz-transform: rotate(359deg)
           }
         }
         @-o-keyframes rotate {
           from {
             -o-transform: rotate(0deg)
           }
           to {
             -o-transform: rotate(359deg)
           }
         }
         @keyframes rotate {
           from {
             transform: rotate(0deg)
           }
           to {
             transform: rotate(359deg)
           }
         }
       }
     }
   }
</style>
