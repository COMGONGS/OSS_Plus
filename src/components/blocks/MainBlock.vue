<template>
    <div class="main-block">
        <div class="slider-box">
            냠
        </div>
        <div class="search-keyword">
            <div class="keyword-title">
                <h2 class="sub-keytitle">키워드로 찾기</h2>
            </div>
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
    background-color: #23C6A2;
}

.search-keyword {
    display: flex;
    justify-content: center;
    margin-top: 150px;
    height: 400px;
    width: 100%;
    background-color: white;
}

.keyword-title {
    margin-bottom: 0;
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
}

.faq {
    margin-bottom: 0;
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