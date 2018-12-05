<template>
  <div class="codingBox">
     <v-article></v-article>
  </div>
</template>

<script>
  import vaticle from '../common/Article'
    export default {
        name: "codding",
      components:{
          "v-article": vaticle
      },
      created(){
        this.$store.commit('classify',2);
      }
    }
</script>

<style scoped>

</style>
