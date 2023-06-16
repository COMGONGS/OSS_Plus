<template>
    <div class="main-block">
        <div class="slider-box">
            <slick id="carousel" 
            ref="slick" 
            :options="slickOptions">
                <a>
                    <figure>
                      <img alt="XX 사진" 
                      src="https://ifh.cc/g/pWHtCo.png">
                    </figure>
                    <p class="name">
        
                    </p>
                    <p class="intro">
        
                    </p>
                    <!--dl의 경우 세부 설명을 list 형태로 나열하기 위해 들고옴 그냥 p로 바꿔도 괜춘할듯-->
                    <div class="counselor-name">
                      <h3>AAA</h3>
                    </div>
                    <dl class="location">
                      <dt>제주시 정신건강복지센터</dt>
                      <dd>제주특별자치도 제주시 노형9길 9-4 2F</dd>
                      <dd>064-xxx-xxxx</dd>
                    </dl>
                    <p class="detail">자세히</p>
                  </a>

                  <a>
                    <figure>
                      <img alt="XX 사진" 
                      src="https://ifh.cc/g/pWHtCo.png">
                    </figure>
                    <p class="name">
        
                    </p>
                    <p class="intro">
        
                    </p>
                    <div class="counselor-name">
                      <h3>BBB</h3>
                    </div>
                    <dl class="location">
                      <dt>제주지역상담센터</dt>
                      <dd>제주시 아라동 xx길</dd>
                      <dd>064-xxx-xxxx</dd>
                    </dl>
                    <p class="detail">자세히</p>
                  </a>

                  <a>
                    <figure>
                      <img alt="XX 사진" 
                      src="https://ifh.cc/g/pWHtCo.png">
                    </figure>
                    <p class="name">
        
                    </p>
                    <p class="intro">
        
                    </p>
                    <div class="counselor-name">
                      <h3>CCC</h3>
                    </div>
                    <dl class="location">
                      <dt>제주지역상담센터</dt>
                      <dd>제주시 아라동 xx길</dd>
                      <dd>064-xxx-xxxx</dd>
                    </dl>
                    <p class="detail">자세히</p>
                  </a>

                  <a>
                    <figure>
                      <img alt="XX 사진" 
                      src="https://ifh.cc/g/pWHtCo.png">
                    </figure>
                    <p class="name">
        
                    </p>
                    <p class="intro">
        
                    </p>
                    <div class="counselor-name">
                      <h3>DDD</h3>
                    </div>
                    <dl class="location">
                      <dt>제주지역상담센터</dt>
                      <dd>제주시 아라동 xx길</dd>
                      <dd>064-xxx-xxxx</dd>
                    </dl>
                    <p class="detail">자세히</p>
                  </a>

                  <a>
                    <figure>
                      <img alt="XX 사진" 
                      src="https://ifh.cc/g/pWHtCo.png">
                    </figure>
                    <p class="name">
        
                    </p>
                    <p class="intro">
        
                    </p>
                    <div class="counselor-name">
                      <h3>EEE</h3>
                    </div>
                    <dl class="location">
                      <dt>제주지역상담센터</dt>
                      <dd>제주시 아라동 xx길</dd>
                      <dd>064-xxx-xxxx</dd>
                    </dl>
                    <p class="detail">자세히</p>
                  </a>
            </slick>
        </div>
        <div class="support-wrap">
            <div class="support">
                <h3 class="sub-suptitle">이용자 지원</h3>
                <div class="sup-menu">
                    <ul class="support-list">
                        <li class="notice">
                            <router-link to="NoticeBoard"> 공지사항 </router-link>
                        </li>
                        <li class="faq">
                            <router-link to="FrequentPage">자주하는 질문</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="line">
        </div>
    </div>
</template>

<script>
import Slick from 'vue-slick';

export default {
    name: 'MainBlock',

    components: {
        Slick
    },
    data() {
      return {
        slickOptions: {
            arrows: false,
            nfinite: true,
            speed: 300,
            slidesToShow: 1,
            variableWidth: true
        }
      }
    }
}
</script>

<style lang="scss">
.main-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.slider-box {
    height: 800px;
    width: 100%;
    background-color: #23C6A2;
}

#carousel .slick-list {
    border-radius: 12px;
    overflow: hidden;
}

#carousel .slick-slide {
    float: left;
    height: 100%;
    min-height: 1px;
}

.figure {
    line-height: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

figure img {
    width: 80%;
    height: 80%;
    align-items: center;
    justify-content: center;
    object-fit: cover;
    object-position: center 5%;
}

.img {
    margin: 0;
    padding: 0;
    border: 0;
    overflow-clip-margin: content-box;
    overflow: clip;
    align-items: center;
    justify-content: center;
  }
  

.sub-keytitle {
    margin-top: 40px;
}

.support-wrap {
    height: 490px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.support {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 250px;
    width: 70%;
    border-radius: 50px;
    background-color: #23C6A2;
}

.sup-menu {
    margin-top: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.support-list {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
}

.sub-title {
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
}

.notice {
    margin-right: 10%;
    margin-bottom: 0;
    font-size: 20px;
}

.faq {
    margin-bottom: 0;
    font-size: 20px;
}

.ol, ul, li {
    list-style: none;
  }

.line {
    width: 100%;
    height: 10px;
    background-color: #23C6A2;
}
</style>