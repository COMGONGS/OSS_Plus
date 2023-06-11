<template>
  <div class="registercounselor-page">
    <BannerPage title="상담사 등록하기"/>
    <div class="maincontents">
      <!--이 부분에 상담사 목록 나열 table 추가 하기-->
      내용 추가
    </div>
  </div>
</template>

<script>
import BannerPage from "@/components/blocks/BannerPage.vue";

export default {
  name: 'RegisterCounselorPage"',

  components: {
    BannerPage
  }
}
</script>

<style lang='scss'>
  .registercounselor-page {
    margin-top: 50px;
  }

  .maincontents {
    height: 800px;
    background-color: gray;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>