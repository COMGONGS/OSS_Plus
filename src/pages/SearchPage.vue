<template>
  <div class="search">
    <BannerPage title="Search" />
  </div>
</template>

<script>
import BannerPage from "@/components/blocks/BannerPage.vue";

export default {
  name: 'SearchPage',

  components: {
    BannerPage
  }
}
</script>

<style lang='scss'>
.search {
  margin-top: 50px;
}
</style>