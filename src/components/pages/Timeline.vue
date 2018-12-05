<template>
   <div class="timeline">
    <v-Time :datas="datas"></v-Time>
   </div>
</template>

<script>
  import Time from '../common/Time'
    export default {
        name: "Timeline",
      components:{
          'v-Time': Time
      },
      data(){
          return{
            datas:[
              {
                time: "2013-09",
                title: "郑州",
                content: "郑州科技学院入学"
              },
              {
                time: "2017-06",
                title: "郑州",
                content: "毕业"
              },
              {
                time: "2017-06",
                title: "郑州",
                content: "前端开发,知诸"
              },
              {
                time: "2017-12",
                title: "上海",
                content: "前端开发,百脑汇"
              }
            ]
          }
      }
    }
</script>

<style scoped lang="less">
  @import (reference) "../../assets/less/public.less";
  .timeline{
    .content();
    text-align: center;
    h1{
      height: 800px;
      line-height: 500px;
      font-size: 26px;
      font-weight: 700;
    }
  }
</style>
