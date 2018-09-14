<template>
   <div class="timeline">
     <h1>敬请期待</h1>
   </div>
</template>

<script>
    export default {
        name: "Timeline"
    }
</script>

<style scoped lang="less">
  @import (reference) "../../less/public.less";
  .timeline{
    .content();
    text-align: center;
    h1{
      height: 800px;
      line-height: 500px;
      font-size: 26px;
      font-weight: 700;
    }
  }
</style>
