<template>
  <div class="HomePage" 
  @scroll="onScroll()">
    <div class="banner">
      <div class="banner-text">
        <p class="context">
          상담이 필요한 현대인<br>
          무엇부터 해야할지 모를 때<br>
          무엇이 당신을 도울 수 있는지<br>
          당신의 불편을 해결하는데 도움을 드리겠습니다.
        </p>
        <button class="explainbutton"
        @click="explain()">
          자세히보기
        </button>
      </div>
    </div>
    <WorkBlock />
    <MainBlock />
  </div>
</template>

<script>
import MainBlock from '@/components/blocks/MainBlock.vue';
import WorkBlock from '@/components/blocks/workBlock/WorkBlock.vue';
export default {
  name: 'HomePage',

  components: {
    MainBlock,
    WorkBlock,
  },

  methods: {
    onScroll() {
      console.log('Scro0LL');
    }
  }
}
</script>

<style lang="scss">
.banner {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 350px;
  background-color: #23C6A2;
  z-index: 1;
}

.banner-text {
  display: flex;
}

.context {
  margin-left: -120px;
  margin-top: 60px;
  color: dark;
  font-size: 30px;
  font-weight: 2000;
}

.explainbutton {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  margin-top: 200px;
  margin-left: 20px;
  height: 40px;
  
  border: none;
  border-radius: 5px;
  
  display: inline-block;
  width: auto;
  
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
  cursor: pointer;
  

}
</style>