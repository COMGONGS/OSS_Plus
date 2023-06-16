<template>
  <div class="HomePage" 
  @scroll="onScroll()">
    <div class="banner">
      <div class="banner-text">
        <h3 class="context">대충 이곳에 글 적어놓으면 되는디</h3>
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

.context {
  color: dark;
}
</style>