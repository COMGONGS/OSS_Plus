<template>
    <div class="footer">
        <app-container>
            <div class="footer__legal">
                <div class="footer__copyright">
                    Built by <a href="">Flowbase</a>· Powered by <a href="">Webflow</a>
                </div>
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

    data() {
        return {
            category: [
                {
                    name: 'company',
                    links: [
                        {
                            name: 'Home',
                            url: ''
                        },
                        {
                            name: 'Order',
                            url: ''
                        },
                        {
                            name: 'FAQ',
                            url: ''
                        },
                        {
                            name: 'Contact',
                            url: ''
                        }
                    ]
                },
                {
                    name: 'TEMPLATE',
                    links: [
                        {
                            name: 'Style Guide',
                            url: ''
                        },
                        {
                            name: 'Changelog',
                            url: ''
                        },
                        {
                            name: 'Licence',
                            url: ''
                        },
                        {
                            name: 'Webflow University',
                            url: ''
                        }
                    ]
                },
                {
                    name: 'FLOWBASE',
                    links: [
                        {
                            name: 'More Cloneables',
                            url: ''
                        },
                    ]
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    .footer {
        background: url("./../assets/images/bg-footer.png");
        background-repeat: no-repeat;
        background-size: cover;
        padding-top: 100px;

        @media screen and (max-width: 576px) {
           padding-top: 60px;
        }

        &__legal {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;
            padding-bottom: 70px;
        }

        &__copyright {
            font-size: 15px;
            line-height: 20px;
            color: #353448;

            & a {
                color: #35B8BE;
                text-decoration: none;
            }
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

    .category {
        display: flex;
        flex-direction: column;

        &__title {
            font-weight: 600;
            font-size: 13px;
            line-height: 20px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: #08090A;
            margin-bottom: 28px;
        }

        &__link {
            margin-bottom: 28px;
            
            & a {
                font-size: 16px;
                line-height: 20px;
                text-decoration: none;
                color: #546285;

                & a:hover {
                    color: #08090A;
                }
            }

            
        }
    }
</style>