<template>
   <div id="Home">
     <v-Top></v-Top>
     <v-Middle></v-Middle>
     <v-Series></v-Series>
     <v-Bottom></v-Bottom>
   </div>
</template>

<script>
  import vTop from '../components/Top'
  import vMiddle from '../components/Middle'
  import vSeries from '../components/Series'
  import vBottom from '../components/Bottom'
    export default {
        name: "index",
        data(){
          return{
          }
        },
      components:{
          "v-Top": vTop,
          "v-Middle": vMiddle,
          "v-Series": vSeries,
          "v-Bottom": vBottom
      }
    }
</script>

<style scoped>

</style>
