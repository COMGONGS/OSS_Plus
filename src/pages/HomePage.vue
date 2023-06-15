<template>
  <div
    class="HomePage"
    @scroll="onScroll()"
  >
      <BannersBlock />
      <WorkBlock />
      <MainBlock />
  </div>
</template>

<script>
import MainBlock from '@/components/blocks/MainBlock.vue';
import WorkBlock from '@/components/blocks/workBlock/WorkBlock.vue';
import BannersBlock from '@/components/blocks/bannersBlock/BannersBlock.vue';

export default {
  name: 'HomePage',

  components: {
      MainBlock,
      WorkBlock,
      BannersBlock
  },

  methods: {
    onScroll() {
      console.log('Scro0LL');
    }
  }
}
</script>