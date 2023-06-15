<template>
  <div class="FrequentPage">
    <BannerPage
        title="자주하는 질문"
    />
    <div v-for="(box, index) in boxes"
         :key="index"
         :class="['box', index % 2 === 0 ? 'green' : 'blue']">
      <div class="question">
        <span class="big-q">Q</span> {{ box.question }}
      </div>
      <div class="answer">
        <span class="big-a">A</span> {{ box.answer }}
      </div>
    </div>
  </div>
</template>

<script>
import BannerPage from "@/components/blocks/BannerPage.vue";

export default {
  name: 'FrequentPage',

  components: {
    BannerPage
  },
  data() {
    return {
      boxes: [
        {
          question: '상담사 등록은 어디서 하나요?',
          answer: '상단 바에서 합니다!'
        },
        {
          question: '상담사들은 어떻게 선정되는 건가요?',
          answer: '자격증을 인증 받아야 상담사가 될 수 있습니다.'
        },
        {
          question: '내담자가 다른 내담자를 상담해줄 수 있나요?',
          answer: '금지하고 있습니다.'
        },
        {
          question: '상담사가 마음에 안 들어요',
          answer: '다른 상담사를 이용해주세요'
        }
      ]
    };
  }
}
</script>

<style lang='scss'>

.faq-page {
  margin-top: 50px;
}

.box {
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 30px;
  margin-bottom: 10px;
}

.question {
  font-size: 40px;
}

.answer {
  margin-top: 5px;
  font-size: 40px;
  padding-left: 3em;
}

.green {
  background-color: #F0FFEF;
}

.blue {
  background-color: #D0FFCC;
}

.big-q {
  font-size: 80px;
  font-weight: bold;
}

.big-a {
  font-size: 80px;
  font-weight: bold;
}
</style>