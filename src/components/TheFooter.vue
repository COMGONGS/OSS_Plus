<template>
    <div class="footer">
        <app-container>
            <div class="footer__info">
                <h5>제주대학교 컴퓨터공학전공 Team.Phytoncide</h5>
                <h5>멤버 : 정진아(팀장), 권혁준, 이지현</h5>
                <div class="footer__socials"
                onclick="window.open('https://github.com/COMGONGS/OSS_Plus')">
                    <div class="footer__social _github"></div>
                </div>
            </div>
        </app-container>
    </div>
</template>

<script>
import AppContainer from '@/components/components/AppContainer.vue';
export default {
    name: 'TheFooter',

    components: {
        AppContainer
    },


}
</script>

<style lang="scss">
.footer {
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 100px;

    @media screen and (max-width: 576px) {
        padding-top: 60px;
    }

    &__info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        padding-bottom: 70px;
    }

    &__socials {
        display: flex;
    }

    &__social {
        position: relative;
        width: 40px;
        height: 40px;
        border: 1px solid rgba(126, 130, 143, 0.3);
        border-radius: 100px;
        cursor: pointer;


        &._github::before {
            content: '';
            position: absolute;
            top: 26%;
            left: 28%;
            width: 20px;
            height: 20px;
            background: url("./../assets/images/github-mark.png");
            background-repeat: no-repeat;
            background-size: cover;
        }
    }

    &__social:not(:last-child) {
        margin-right: 24px;
    }


}
</style>