<template>
  <div class="search">
    <BannerPage title="Search" />
    <div class="maincontents">
      <div class="listcontainer">
        <ul class="list">
          <li class="profile-card">
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
              <dl class="location">
                <dt>제주지역상담센터</dt>
                <dd>제주시 아라동 xx길</dd>
                <dd>064-xxx-xxxx</dd>
              </dl>
              <p class="detail">자세히</p>
            </a>
          </li><li class="profile-card">
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
              <dl class="location">
                <dt>제주지역상담센터</dt>
                <dd>제주시 아라동 xx길</dd>
                <dd>064-xxx-xxxx</dd>
              </dl>
              <p class="detail">자세히</p>
            </a>
          </li>
          <li class="profile-card">
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
              <dl class="location">
                <dt>제주지역상담센터</dt>
                <dd>제주시 아라동 xx길</dd>
                <dd>064-xxx-xxxx</dd>
              </dl>
              <p class="detail">자세히</p>
            </a>
          </li>
          <li class="profile-card">
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
              <dl class="location">
                <dt>제주지역상담센터</dt>
                <dd>제주시 아라동 xx길</dd>
                <dd>064-xxx-xxxx</dd>
              </dl>
              <p class="detail">자세히</p>
            </a>
          </li>
          <li class="profile-card">
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
              <dl class="location">
                <dt>제주지역상담센터</dt>
                <dd>제주시 아라동 xx길</dd>
                <dd>064-xxx-xxxx</dd>
              </dl>
              <p class="detail">자세히</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
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

.maincontents {
  height: auto;
  background-color: gray;
  background-repeat: no-repeat;
  background-size: cover;
}

.listcontainer {
  display: flex;
}

.ol, ul, li {
  list-style: none;
}

.list {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.profile-card {
  background: white;
  border-radius: var(--Radius-L);
}

ul.list > li {
  position: relative;
  flex: 0 1 290px;
}

.ul.list figure {
  position: absolute;
  top: -30px;
  width: 100px;
  height: 120px;
  background-color: #fff;
  background-size: cover;
  border: 1px solid var(--Lic-Line);
  border-radius: var(--Radius-M);
  overflow: hidden;
}

.figure {
  line-height: 0;
}

ul.list figure img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 5%;
}

.img {
  margin: 0;
  padding: 0;
  border: 0;
  overflow-clip-margin: content-box;
  overflow: clip;
}
</style>