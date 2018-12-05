<template>
    <div class="TimeLine">
      <div class="lineBox">
        <div class="circle"><i class="iconfont">&#xe71e;</i></div>
        <div class="line"></div>
      </div>
      <ul class="list">
        <li v-for="item in datas">
            <div class="content">
               <p class="address">{{item.title}}</p>
               <p class="time">{{item.time}}</p>
               <p class="work">{{item.content}}</p>
            </div>
        </li>

      </ul>
    </div>
</template>

<script>
    export default {
        name: "Time",
      props:{
          datas: Array
      },
      data(){
          return{}
      },
      created(){
          console.log(this.datas);
      }
    }
</script>

<style scoped lang="less">
   .TimeLine{
     text-align: center;
     padding: 40px 0;
     margin-bottom: 20px;
     position: relative;
     .lineBox{
       text-align: center;
       display: inline-block;
       position: absolute;
       left: calc(50% - 8px);
       height: 100%;
       .circle{
         display: inline-block;
       }
       .line{
           position: absolute;
           left: calc(50% - 1px);
           top: 18px;
           content: '';
           display: block;
           background-color: #666;
           width: 2px;
           height: calc(100% - 100px);
           z-index: 1;
       }
     }
     .list{
       width: 100%;
       height: 100%;
       overflow: hidden;
       padding-bottom: 50px;
       li{
         width: 50%;
         height: 200px;
         margin-top: 40px;
         float: left;
         position: relative;
         .content{
           position: absolute;
           top: 0;
           right: 0;
           background-color: #fff;
           width: 300px;
           padding: 10px;
           border-radius: 5px 0px 0px 5px;
           .address{
             line-height: 24px;
             font-size: 18px;
             color: #333;
           }
           .time{
             line-height: 24px;
             font-size: 16px;
             color: #999;
           }
           .work{
             line-height: 24px;
             font-size: 16px;
             color: #666;
           }
         }
       }
       li:nth-child(2n){
         float: right;
         .content{
           right: auto;
           left: 0;
           top: auto;
           bottom: 0px;
           border-radius: 0px 5px 5px 0;
         }
       }
     }
   }
</style>

