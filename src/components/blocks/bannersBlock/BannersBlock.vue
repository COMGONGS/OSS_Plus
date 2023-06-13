<template>
    <div class="banners">
        <BannerCard
            class="banners__card _margin"
        />
    </div>
</template>

<script>
import BannerCard from './BannerCard.vue';

export default {
    name: 'BannersBlock',

    components: {
        BannerCard
    }
}
</script>

<style lang="scss">
    .banners {
        display: flex;
        background-color: teal;

        @media screen and (max-width: 992px) {
            flex-direction: column-reverse;
            align-items: center;
        }

        &__card {
            max-width: 50%;
            max-height: 640px;
            height: 100vh;

            &._margin {
                margin-right: 22px;
            }

            @media screen {
                max-height: 440px;
            }

            @media screen {
                max-width: 100%;
                max-height: 300px;

                &._margin {
                    margin-right: 0;
                }
            }

            @media screen {
                max-width: 100%; 
            }
        }
    }
</style>