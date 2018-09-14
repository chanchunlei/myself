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
          //console.log(this.$route.params)
      }
    }
</script>

<style scoped>

</style>
