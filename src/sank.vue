<template>
   <div>
        <div class="title-block-new">
            <div class="div-block-51 _500 w-clearfix">
                <div class="heading-text-block _500">
                <div class="div-line"></div>
                <div class="div-rad"></div>
                <div class="div-block-50"></div>
                <div class="div-rad min"></div>
                <h2 class="heading-13">Спасибо за заказ<br></h2>
                </div>
            </div>
        </div>
        <div v-if="conteinerBool" class="toset col-sm-12 text-center" style="display: flex;justify-content: center;">
            <div class="colorTitle">
                Наш специалист обработает полученные данные<br>
                и предоставит Вам расчет в течении 24 часов.
            </div>
        </div>
        <div v-if="!conteinerBool" class="toset col-sm-12 text-center" style="display: flex;justify-content: center; flex-direction: column;">
            <div class="colorTitle">
                Наш специалист обработает полученные данные<br>
                и свяжеться с Вами в ближайшее время
            </div>
            <div class="block-down" style="display: flex;justify-content: space-between; flex-direction: row; margin: 20px 0;">
                <div class="col-sm-6 row text-left">
                    <div class="col-sm-1">
                        <img src="/img/29.png" width="20px" />
                    </div>
                    <div class="col-sm-10">
                         <div class="pointer">Ваша корзина</div>
                    </div>
                </div>
                <div class="col-sm-4 row text-right" style="margin: 0 -50px 0 0">
                    <div class="col-sm-1 text-right">
                        <img src="/img/10.png" width="20px" />
                    </div>
                    <div class="col-sm-10 text-left">
                        <div @click="downloadPDF" class="pointer">Скачать накладную</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import {mapMutations} from 'vuex';
    import {mapGetters} from 'vuex';
	import VueMask from 'v-mask'
    import { varperem, docInfo, zakazchik } from '../js/script'
    export default {
        name: 'app',
        data () {
            return {
                
            }
        },
        computed: {
            ...mapGetters([
                'conteinerBool'
            ])
        },
        methods: {
            downloadPDF(){
                varperem({zakazchik: this.$store.state.documentUrlico})
                pdfMake.createPdf(docInfo).download('name.pdf');
                /*setTimeout(() => {
                    
                }, 500) */
            }
        },
        components: {
        },
    }
</script>

<style>
    .colorTitle {
        color: #11469e;
        font-size: 18px;
        margin: 50px 0;
    }
    .pointer {
        cursor: pointer;
    }
</style>
