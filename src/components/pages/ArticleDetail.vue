<template>
  <div class="articleBox">
      <h1>{{title}}</h1>
    <div class="contents" v-html="content">

    </div>
  </div>
</template>

<script>
  import api from '../../api/api'
    export default {
        name: "ArticleDetail",
      data(){
          return{
            title:'',
            content: ''
        }
      },
      created(){
          const articleID = localStorage.getItem('myArticle');
          api.article({
            query:{
              articleId: articleID
            },
            success:function(res){
              //console.log(res);
              if(res.status==200){
                this.title = res.data.title;
                this.content = res.data.content;
              }
            }.bind(this)
          })
      }
    }
</script>

<style lang="less">
  @import (reference) "../../assets/less/public.less";
  .articleBox{
    .content();
    background-color: #fff;
    padding: 0 30px;
    h1{
      line-height: 100px;
      font-weight: 700;
      font-size: 24px;
      text-align: center;
    }

  }
   .contents /deep/ pre{
    background-color: #282C34;
     color: #fff;
    font-size: 20px;
  }

</style>
