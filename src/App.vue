<template>
  <div id="app">
    <header class="header">
      <a-menu class="container"/>
    </header>
    <div class="container app__inner">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import AMenu from '@/components/Menu';

  export default {
    components: { AMenu }
  };
</script>

<style>
  .app__inner {
    padding: 0 15px;
  }

  .header {
    background-color: #7957d5;
    padding: 0 15px;
  }
</style>
