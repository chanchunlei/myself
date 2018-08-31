<template>
  <div class="coddingBox">
     <v-nav></v-nav>
     <v-article></v-article>
  </div>
</template>

<script>
  import vnav from './common/Nav'
  import vaticle from './common/Article'
    export default {
        name: "codding",
      components:{
          "v-nav": vnav,
          "v-article": vaticle,
      }
    }
</script>

<style scoped>

</style>
