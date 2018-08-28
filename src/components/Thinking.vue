<template>
   <div class="thinking">
     <v-nav></v-nav>
     <v-article></v-article>
   </div>
</template>

<script>
  import vnav from './common/Nav'
  import vaticle from './common/Article'
    export default {
        name: "Thinking",
      components:{
        "v-nav": vnav,
        "v-article": vaticle
      }
    }
</script>

<style scoped>

</style>
