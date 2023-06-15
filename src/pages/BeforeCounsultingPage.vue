<template>
  <div class="beforecounsulting">
    <BannerPage title="BeforeCounsulting"/>
    <div class="maincontents">
      <!--이 부분에 상담사 목록 나열 table 추가 하기-->
      내용추가
    </div>
  </div>
</template>

<script>
import BannerPage from '@/components/blocks/BannerPage.vue';

export default {
  name: 'BeforeCounsultingPage',

  components: {
    BannerPage
  }
}
</script>

<style lang='scss'>
  .beforecounsulting {
    margin-top: 50px;
  }

  .maincontents {
    height: 800px;
    background-color: gray;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>