<template>
  <div class="faq-page">
    <BannerPage
      title="상담사 등록하기"
    />
  </div>
</template>

<script>
import BannerPage from "@/components/blocks/BannerPage.vue";

export default {
  name: 'FAQPage',

  components: {
    BannerPage
  }
}
</script>

<style lang='scss'>
  .faq-page {
    margin-top: 50px;
  }
</style>