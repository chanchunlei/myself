<template>
  <div class="paging">
    <div v-if="showI" @click="first">首页</div>
    <div @click="prev">&laquo;</div>
    <ul>
      <li v-if="showI">...</li>
      <li v-for="item in arr" @click="go(item)" :class="nowPage==item?'active':''">{{item}}</li>
      <li v-if="showII">...</li>
    </ul>
    <div @click="next">&raquo;</div>
    <div v-if="showII" @click="last">尾页</div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
    export default {
        name: "Paging",
      data(){
          return{
            showI: true,
            showII: true,
            total: 5,
            showPage: 5,
            nowPage: 1,
            arr:[]
        }
      },
      created(){
        this.Pages(this.total);
      },
      computed:{//计算属性

        ...mapState({
          pageAll: state => state.pageAll,
        }),
      },
      methods:{//不要在选项属性或回调上使用箭头函数
        Pages:function(total){
          this.showPage = 5;//默认显示几页
          if(this.showPage > total){//如果要显示的页码大于总页码
            this.showPage = total;
          }
          //console.log(this.showPage);
          let arr = [];
          let start = this.nowPage;
          const middleNum = Math.floor(this.showPage/2);
          if(this.nowPage <= middleNum){//判断开始显示的页码
            start = 1;
          }else if(this.nowPage+middleNum > total){//判断是否是最后的页码
            start = total - this.showPage + 1;
          }else{
            start = this.nowPage - middleNum;
          }
          if(start ==1){//判断前面的省略
            this.showI = false;
          }else{
            this.showI = true;
          }
          if(start+this.showPage<=total){//判断后面的省略
            this.showII = true;
          }else{
            this.showII = false;
          }
          for(let i=start;i<start+this.showPage; i++){
            arr.push(i);
          }
          //this.first();
          this.arr = arr;
        },
        first:function (){//首页
          this.nowPage = 1;
        },
        prev:function(){//上一页
          if(this.nowPage>1){
            this.nowPage = this.nowPage-1;
          }
        },
        go:function (item){//调到某页
          this.nowPage = item;
        },
        next:function(){//下一页
          if(this.nowPage<this.total){
            this.nowPage = this.nowPage+1;
          }
        },
        last:function () {//尾页
          this.nowPage = this.total;
        }
      },
      watch:{
        pageAll(val){
          console.log(val);
          this.total = val;
          if(val>1){
            this.$store.commit('paping',true);
          }else{
            this.$store.commit('paping',false);
          }
          this.Pages(val);
        },
        nowPage(val){
          this.$store.commit('pageNow',val)
        }
      },
      beforeDestroy(){//销毁前隐藏分页
       this.$store.commit('paping',false);
        this.$store.commit('pageAll',1);
      }
    }
</script>

<style scoped lang="less">
  @import (reference) "../../assets/less/public.less";
   .paging{
     .content();
     text-align: center;
     font-size: 0;
     padding-bottom: 30px;
     div,ul,ul>li{
       display: inline-block;
       line-height: 40px;
       font-size: 18px;
       text-align: center;
     }
     div,ul>li{
       width: 60px;
       border: 1px solid #e2e2e2;
       box-sizing: border-box;
       border-radius: 2px;
       margin: 0 5px;
       cursor: pointer;
     }
     ul>.active{
       background-color: #333;
       color: #fff;
     }
   }
</style>
