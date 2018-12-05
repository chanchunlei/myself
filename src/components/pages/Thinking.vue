<template>
   <div class="thinking">
     <v-article></v-article>
   </div>
</template>

<script>
  import vaticle from '../common/Article'
    export default {
        name: "Thinking",
      components:{
        "v-article": vaticle
      },
      created(){
        this.$store.commit('classify',4);
      }
    }
</script>

<style scoped>

</style>
