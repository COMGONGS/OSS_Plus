<template>
    <div class="banner-page">
      <div
          class="banner-page__color"
      ></div>
      <div
          ref="title"
          class="banner-page__title"
      >
          <h1>{{ title }}</h1>
      </div>
    </div>
  </template>
  
  <script>
  import { gsap } from 'gsap';
  
  export default {
      name: 'BannerPage',
  
      components: {},
  
      props: {
          title: {
              type: String,
              default: '',
          }
      },
  
      mounted() {
          this.AnimationMainBlock();
      },
  
      methods: {
          AnimationMainBlock() {
              const title = this.$refs.title;
              const img = this.$refs.img
  
              gsap.to(title, {
                  opacity: '1',
                  y: 0,
                  duration: 0.3,
              });
              gsap.to(img, {
                  opacity: 1,
                  duration: .5,
              });
          }
      }
  }
  </script>
  
  <style lang="scss">
      .banner-page {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          min-height: 350px;
          background-color: #23C6A2;
          z-index: 1;
  
          &__title {
              opacity: 0;
              transform: translateY(100px);
              transition: all .5s linear;
  
              & h1 {
                  font-size: 60px;
                  line-height: 60px;
                  letter-spacing: 1.8px;
                  color: #08090A;
              }
          }
      }
  </style>