<template>
  <div class="thumbnail">
    <div class="navBox">
      <div class="listNav" v-for="(item,index) in list" @click="changeSub(item.subClassifyId,index)" :key="index">{{item.title}}</div>
    </div>
    <div class="titleH3">
      {{titles}}
    </div>
    <ul class="listBox">
      <li v-for="item in conent" @click="runDetail(item.articleId)">
        <div class="cover"><img :src="item.cover" alt=""></div>
        <p class="title">{{item.title}}</p>
        <p class="contents">{{filterHTMLTag(item.content)}}</p>
        <p class="time">{{item.time}}</p>
      </li>
    </ul>
    <v-paging v-show="this.$store.state.paping"></v-paging>
  </div>
</template>

<script>
  import vpaging from './Paging'
  import api from '../../api/api'
  import { mapState } from 'vuex'
    export default {
        name: "Article",
      components:{
          "v-paging":vpaging
      },
      data(){
          return{
            list: [],
            conent:[],
            titles:'',
            pageAll: 0,
          }
      },
      mounted(){
          const that = this;
          that.getData(that.classify);
      },

      methods:{
        getData:function(classifyId){//初次数据
          api.classify({
            query:{
              classifyId:classifyId
            },
            success:function(res){
              //console.log(res.data);
              if(res.status == 200){
                this.list = res.data.nav;
                this.conent = res.data.conent;
                this.titles = this.conent[0].titles;
                this.pageAll = res.data.pageAll;
                this.$store.commit('subClassifyId',this.conent[0].subClassifyId);
                this.$store.commit('pageAll',res.data.pageAll);
              }
            }.bind(this)
          })
        },
        changeSub(sub,index){//小分类
          this.$store.commit('subClassifyId',sub);
          this.titles = this.list[index].title;
          api.classifyPage({
            query:{
              pageNow: 1,
              subClassifyId: sub
            },
            success:function(res){
              //console.log(res);
              if(res.status==200){
                this.conent = res.data.conent;
                this.pageAll = res.data.pageAll;
                this.$store.commit('pageAll',res.data.pageAll);
              }
            }.bind(this)
          })
        },
        runDetail:function(articleId){//去详情页
          const article = localStorage.setItem('myArticle',articleId);
          this.$router.push('/Article');
        },
        filterHTMLTag:function (msg) {
          let str = msg.replace(/<\/?[^>]*>/g, ''); //去除HTML Tag
          str = str.replace(/[|]*\n/, '') //去除行尾空格
          str = str.replace(/&npsp;/ig, ''); //去掉npsp
          return str;
        },
      },
      updated(){
        if(this.pageAll<=1){
          this.isShow = false;
        }else{
          this.isShow = true;
        }

      },
      computed: mapState({
        classify: state => state.classifyId,
        subClassifyId: state => state.subClassifyId,
        pageNow: state => state.pageNow,
        paping: state => state.paping
      }),
      watch:{
          pageNow(val){
            api.classifyPage({
              query:{
                pageNow: val,
                subClassifyId: this.subClassifyId
              },
              success:function(res){
                //console.log(res);
                if(res.status==200){
                  this.conent = res.data.conent;
                }
              }.bind(this)
            })
        }
      }
    }
</script>

<style scoped lang="less">
  @import (reference) "../../assets/less/public.less";
  .thumbnail{
    .box();
    .titleH3{
      .content();
      line-height: 80px;
      font-size: 22px;
      color: #333;
      font-weight: 700;
      text-align: center;
     }
    .listBox{
      .content();
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      li{
        width: 25%;
        padding: 15px;
        box-sizing: border-box;
        margin-bottom: 20px;
      }
    }
    .cover{
      width: 100%;
      text-align: center;
      img{
        width: 220px;
        height: 200px;
      }
    }
    .title{
      .indent(@length:0em,@line:1);
      font-size: 18px;
      font-weight: 700;
      line-height: 30px;
    }
    .contents{
      .indent(@length:2em,@line:3);
      font-size: 14px;
      font-weight: normal;
      color: #666;
    }
    .time{
      line-height: 35px;
      font-size: 14px;
      text-align: right;
      border-bottom: 1px solid #eee;
      color: #999;
    }
  }
  .navBox{
    .content();
    width: 100%;
    background-color: #f2f2f2;
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
