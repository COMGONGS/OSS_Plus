<template>
    <div class="main-block">
        <div class="slider-box">
            냠
        </div>
        <div class="search-keyword">
            <div class="keyword-title">
                <p>키워드로 찾기</p>
            </div>
        </div>
        <div class="support-wrap">
            <div class="support">
                <ul class="support-list">
                    <li class="small-title">
                        <h3 class="sub-title">이용자 지원</h3>
                    </li>
                    <li class="notice">
                        공지사항
                    </li>
                    <li class="faq">
                        자주하는 질문
                    </li>
                </ul>
            </div>
        </div>
        <hr/>
    </div>
</template>

<script>
// import AppContainer from "@/components/components/AppContainer.vue";

export default {
    name: 'MainBlock',

    components: {
        //AppContainer,
    },

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
    background-color: gray;
}

.search-keyword {
    margin-top: 150px;
    height: 400px;
    width: 100%;
    background-color: lightblue;
}

.keyword-title {
    margin-bottom: 0;
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
    height: 250px;
    width: 70%;
    border-radius: 50px;
    background-color: gray;
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

.small-title {
    margin-right: 20%;
    margin-bottom: 0;
}

.notice {
    margin-right: 10%;
    margin-bottom: 0;
}

.faq {
    margin-bottom: 0;
}

.ol, ul, li {
    list-style: none;
  }

.hr {
    width: 100%;
    height: 10px;
}
</style>