<template>
    <div class="navBox">
      <div class="listNav" v-for="(item,index) in list" :key="index">{{item.title}}</div>
    </div>
</template>

<script>
    export default {
        name: "Nav",
      data(){
          return{
            list: [
              {id:1,title:"前端插件"},
              {id:2,title:"小程序"},
              {id:3,title:"前端框架"},
              {id:4,title:"canvas"}]
          }
      },

    }
</script>

<style scoped lang="less">
  @import (reference) "../../less/public.less";
  .navBox{
    .content();
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
