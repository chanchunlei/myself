<template>
  <div class="Top">
    <div class="top_box">
      <ul class="nav">
        <li v-for="item in list" :key="item.classify">
          <router-link @click.native="RunPath(item.classify)" :to="item.path" :data-classify="item.classify" active-class>{{item.navName}}</router-link>
        </li>
      </ul>
      <div class="search">
          <span class="animated inp_box" :class="className">
            <input class="inp" type="text" placeholder="搜索是个好东西">
            <input class="btn_s" type="button" value="搜索">
          </span>
        <span class="btn"><i @click="btn()" v-if="!isShow" class="iconfont">&#xe637;</i><i @click="close()"
                                                                                           v-if="isShow"
                                                                                           class="iconfont">&#xe690;</i></span>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '../../api/api.js'
  export default {
    name: "Top",
    data() {
      return {
        isShow: false,
        className: "isHide",
        list: []
      }
    },
    created: function () {
      api.Top({
        success: function (res) {
          if (res.status == 200) {
            this.list = res.data.nav
            //console.log(res.data.nav);
          }
        }.bind(this)
      })
      //console.log(this.$store.state.loading)
    },
    methods: {
      btn: function () {
        this.className = "zoomIn";
        this.isShow = !this.isShow;
      },
      close: function () {
        this.className = "isHide";
        this.isShow = !this.isShow;
      },
      RunPath: function (classify) {
        this.$store.commit('classify',classify);
      },
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import (reference) "../../assets/less/public.less";

  .Top {
    .box();
    border-bottom: 1px solid #edeeee;
  }

  .top_box {
    .content();
    position: relative;
  }

  .height() { //公用高度
    height: 80px;
    line-height: 80px;
  }

  .nav {
    display: flex;
    justify-content: flex-start;
    .height();
    li {
      margin: 0 15px;
      cursor: pointer;
      .router-link-exact-active {
        font-size: 18px;
        color: #999;
      }
    }
  }

  .search {
    position: absolute;
    right: 0;
    top: 0;
    width: 25%;
    text-align: right;
    .height();
  }

  .inp_box {
    position: relative;
  }

  .inp {
    width: 90%;
    padding-right: 60px;
    box-sizing: border-box;
    border: 1px solid #999;
    line-height: 25px;
    border-radius: 5px;
    padding-left: 5px;
    font-size: 14px;
    color: #666;
  }

  .btn_s {
    width: 60px;
    position: absolute;
    top: 0;
    right: 6px;
    border: none;
    background-color: #333;
    color: #fff;
    line-height: 25px;
    border-radius: 3px;
    .font-size()
  }

  .isHide {
    display: none;
  }

  .btn {
    cursor: pointer;
    i {
      font-size: 18px;
    }
  }
</style>
