<template>
   <div class="longWay">
     <v-article></v-article>
   </div>
</template>
<script>
  import vaticle from '../common/Article'
    export default {
        name: "Longway",
      components:{
        "v-article": vaticle
      },
      created(){
        this.$store.commit('classify',3);
      }
    }
</script>

<style scoped>

</style>
