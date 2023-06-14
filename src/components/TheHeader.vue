<template>
    <header
        class="TheHeader Header"
    >
        <app-container>
            <div class="header">
                <router-link to="/"><div class="header__logo"></div></router-link>
                <div class="header__wrapper">
                    <div
                        v-if="!isMobile"
                        class="header__menu"
                    >
                        <nav class="menu">
                            <router-link to="/search"><li class="menu__item">상담사 찾기</li></router-link>
                            <router-link to="/counsulting"><li class="menu__item">상담하기</li></router-link>
                            <router-link to="/beforecounsulting"><li class="menu__item">상담하기 전에</li></router-link>
                            <router-link to="/registercounselor"><li class="menu__item">상담사 등록하기</li></router-link>
                            <nav class="sub_menu">
                                <router-link to="/login"><li class="menu__item">로그인</li></router-link>
                                <router-link to="/signup"><li class="menu__item">회원가입</li></router-link>
                            </nav>
                        </nav>
                    </div>
                </div>
            </div>
        </app-container>
    </header>
</template>

<script>
import AppContainer from './components/AppContainer.vue';

export default {
    name: 'TheHeader',

    components: {
        AppContainer,
    },
    computed: {
        isMobile() {
            return window.innerWidth <= 768;
        }
    },

    data() {
        return {
            isActiveMenu: false,
            isScrollBottom: true,
            lastScrollPosition: 0,
        };
    },
}
</script>

<style lang="scss">
    .TheHeader {
        position: sticky;
        top: 0;
        left: 0;
        margin-bottom: -50px;
        background-color: #fff;
        z-index: 12;
    }

    .Header {
        transition: transform .3s linear,box-shadow .3s ease,border .3s ease;
    }

    .header {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 120px;
        width: 70%;

        &__logo {
            width: 50px;
            height: 50px;
            margin-right: 50px;
            background: url("./../assets/images/logo.png");
            background-repeat: no-repeat;
            background-size: cover;
            cursor: pointer;
        }

        &__wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: auto;

        }

        &__menu {
            width: 1000px;
        }

    }

    .menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width:  953px;

        &__item {
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 20px;
            color: #28224B;
            list-style: none;
            transition: all .3s linear;
            cursor: pointer;

            &:hover {
                color: #35B8BE;
            }
        }

        & a {
            text-decoration: none;
        }
    }
    .sub_menu{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width:  170px;

        &__item {
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            color: #28224B;
            list-style: none;
            transition: all .3s linear;
            cursor: pointer;

            &:hover {
                color: #35B8BE;
            }
        }

        & a {
            text-decoration: none;
        }
    }

</style>