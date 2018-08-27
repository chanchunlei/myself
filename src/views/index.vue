<template>
   <div id="Home">
     <v-Top></v-Top>
     <div class="bodyBox">
         <transition name="change" mode="out-in">
           <keep-alive>
             <router-view></router-view>
           </keep-alive>
         </transition>
     </div>
     <v-Bottom></v-Bottom>
   </div>
</template>

<script>
  import vTop from '../components/Top'
  import vBottom from '../components/Bottom'
    export default {
        name: "index",
        data(){
          return{
          }
        },
      components:{
          "v-Top": vTop,
          "v-Bottom": vBottom
      }
    }
</script>

<style scoped>

</style>
