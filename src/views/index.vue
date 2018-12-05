<template>
   <div id="Home">
     <v-Loading v-if="this.$store.state.loading"></v-Loading>
     <v-Top></v-Top>
     <div class="bodyBox">
         <transition name="change" mode="out-in">
             <router-view></router-view>
         </transition>
     </div>
     <v-Bottom></v-Bottom>
   </div>
</template>

<script>
  import vTop from '../components/index/Top'
  import vBottom from '../components/index/Bottom'
  import vLoading from '../components/index/loading'
    export default {
        name: "index",
        data(){
          return{
            loading: false
          }
        },
      components:{
          "v-Top": vTop,
          "v-Bottom": vBottom,
          "v-Loading": vLoading
      },
      mounted(){
         //console.log(this.$store.state.loading)
      }
    }
</script>

<style scoped>

</style>
