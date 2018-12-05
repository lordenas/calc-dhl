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
                и свяжется с Вами в ближайшее время
            </div>
            <div class="block-down" style="display: flex;justify-content: space-between; flex-direction: row; margin: 20px 0;">
                <div class="col-sm-6 row text-left">
                    <div class="col-sm-1">
                        <img src="/img/29.png" width="20px" />
                    </div>
                    <div class="col-sm-10">
                         <div class="pointer"><a href="#basket" v-smooth-scroll>Ваша корзина</a></div>
                    </div>
                </div>
                <div class="col-sm-4 row text-right" style="margin: 0 -50px 0 0">
                    <div class="col-sm-1 text-right">
                        <img src="/img/10.png" width="20px" />
                    </div>
                    
                    <div  v-if="presoptionStateFace == 1 &&  this.$store.state.checkedclietn == 1" class="col-sm-10 text-left">
                        <div @click="downloadPDF(presoptionStateFace)" class="pointer">Скачать договор</div>
                    </div>
                    
                    <div  v-if="presoptionStateFace == 2  ||  this.$store.state.checkedclietn == 2" class="col-sm-10 text-left">
                        <div @click="downloadPDF(presoptionStateFace)" class="pointer">Скачать накладную</div>
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
    import { varperem, docInfo, docInfoFiz, varperemFiz } from '../js/script'
    export default {
        name: 'app',
        data () {
            return {
                
            }
        },
        mounted(){
            this.$store.state.backetData[0].title != 3 ? this.downloadPDF(this.presoptionStateFace) : false
        },
        computed: {
            ...mapGetters([
                'conteinerBool', 'presoptionStateFace',  'countDayState','presoptionStateBay', 'periodGetState'
            ])
        },
        methods: {
            ...mapMutations([
                'presoptionFace'
            ]),
            downloadPDF(type) {
                 var adrress = 'Из ' +  this.$store.state.countryGetText  + ', город ' + (this.$store.state.citySetText ||  this.$store.state.citynoRusSendStore) + ', индекс ' + this.$store.state.indexSet+ ' '    + ' - в ' +  this.$store.state.countrySetText + ', город ' + (this.$store.state.cityGetText.length > 0 ? this.$store.state.cityGetText  :  this.$store.state.citynoRusStore) + ', индекс ' + this.$store.state.indexGet  
                if( type == 1 && this.$store.state.checkedclietn == 1) {
               
                varperem(
                    {
                        vliceDirinput: this.$store.state.inputClintInfo.vliceDirinput, 
                        zakazchik: this.$store.state.zakazchik,
                        documentUrlico: this.$store.state.documentUrlico,
                        inn: this.$store.state.inn,
                        kpp: this.$store.state.kpp,
                        ogrn:  this.$store.state.ogrn,
                        rschet: this.$store.state.rschet,
                        kschet: this.$store.state.kschet,
                        bank: this.$store.state.bank,
                        bik: this.$store.state.bik,
                        tel: this.$store.state.inputClintInfo.tel,
                        mailPoshta: this.$store.state.mailPoshta,
                        random: this.$store.state.randomnumber,
                    }
                    )
                    pdfMake.createPdf(docInfo).download('договор.pdf');
                } else {
                    let newdata =  new Date()
                    var today = ( this.$store.state.datestateregular.getDate() < 10 ? '0' : '') +  this.$store.state.datestateregular.getDate() + '.' + (( this.$store.state.datestateregular.getMonth() + 1) < 10 ? '0' : '') + ( this.$store.state.datestateregular.getMonth() + 1) + '.' +  this.$store.state.datestateregular.getUTCFullYear()
                    var todayLast = ((parseInt( this.$store.state.datestateregular.getDate())+parseInt(this.countDayState)) < 10 ? '0' : '') + (parseInt( this.$store.state.datestateregular.getDate())+parseInt(this.countDayState)) + '.' + (( this.$store.state.datestateregular.getMonth() + 1) < 10 ? '0' : '') + ( this.$store.state.datestateregular.getMonth() + 1) + '.' +  this.$store.state.datestateregular.getUTCFullYear()
                    


                    varperemFiz({
                        //adrress: this.$store.state.inputClintInfo.addressotprhis,
                        presoptionStateFace: this.presoptionStateFace,
                        regulat: this.periodGetState,
                        zakazchik: this.$store.state.inputClintInfo.vliceinput,
                        addressotprhis: this.$store.state.inputClintInfo.addressotprhis,
                        orgotpravit: this.$store.state.inputClintInfo.orgotpravit,
                        telephone: this.$store.state.inputClintInfo.tel,
                        opis: this.$store.state.backetData,
                        fiopoluch: this.$store.state.inputClintInfo.fiopoluch,
                        nazorg: this.$store.state.inputClintInfo.nazorg,
                        addresspoluch: this.$store.state.inputClintInfo.addresspoluch,
                        todayLast: todayLast,
                        today: today,
                        telpoluchinput: this.$store.state.inputClintInfo.telpoluchinput,
                        sposoboplati: this.presoptionStateBay,
                        commentszakaz: this.$store.state.commentszakaz,
                        citySetText: this.$store.state.citySetText.length > 0 ? this.$store.state.citySetText : this.$store.state.citynoRusSendStore,
                        cityGetText: this.$store.state.cityGetText.length  > 0 ? this.$store.state.cityGetText : this.$store.state.citynoRusStore,
                        indexSet: this.$store.state.indexSet,
                        indexGet: this.$store.state.indexGet,
                        citynoRusSendStore: this.$store.state.citynoRusSendStore,
                        citynoRusStore: this.$store.state.citynoRusStore,
                        price: this.$store.state.tarifcalc,
                        random: this.$store.state.randomnumber,
                    })
                   
                pdfMake.createPdf(docInfoFiz).download('накладная.pdf');
                }


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
