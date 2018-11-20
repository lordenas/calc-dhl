<template>
   <div>
        <div class="title-block-new">
            <div class="div-block-51 _500 w-clearfix">
                <div class="heading-text-block _500">
                <div class="div-line"></div>
                <div class="div-rad"></div>
                <div class="div-block-50"></div>
                <div class="div-rad min"></div>
                <h2 class="heading-13">Укажите данные о себе<br></h2>
                </div>
            </div>
        </div>
        <div class="typestore-icon" v-if="!this.$store.state.flagBasketContainer">
                <div class="typestore-icon-step" v-on:click="presoptionFace(1)">
                    <div class="typestore-icon-step-radio" v-bind:class="{ active: presoptionStateFace == 1 }" @click="presoptionFace(1)"></div>
                    <div class="typestore-icon-step-body">
                        <div class="typestore-icon-step-active" >
                            <img src="img/yr1.png" />
                        </div>
                        <span>Юр. лицо или ИП</span>
                    </div>
                </div>
                <div class="typestore-icon-step" v-on:click="presoptionFace(2)">
                    <div class="typestore-icon-step-radio" v-bind:class="{ active: presoptionStateFace == 2 }" @click="presoptionFace(2)"></div>
                    <div class="typestore-icon-step-body">
                        <div class="typestore-icon-step-active" >
                            <img src="img/fiz1.png" />
                        </div>
                        <span>Физ. лицо</span>
                    </div>
                </div>
        </div>

		<div class="radio-btn-group client-urlic" v-show="presoptionStateFace == 1"  v-if="!this.$store.state.flagBasketContainer">
			<div class="radio"><input type="radio" name="radio" value="1" checked="checked" v-model="checked" id="one" @change="updatevaluecheck($event)"/><label for="one">Новый клиент</label></div>
			<div class="radio"><input type="radio" name="radio" value="2" v-model="checked" id="two"  @change="updatevaluecheck($event)" /><label for="two">Действующий клиент</label></div>
		</div>
                <b-form @submit="onSubmitValid">
                    <div v-if="checked == 2 && presoptionStateFace == 1" class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label">Номер договора</label>
                        <div class="col-sm-9">
                            <input v-model="deistvklient" type="text" class="form-control" >
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label">ФИО отправителя</label>
                        <div class="col-sm-9">
                            <b-form-input 
                                id="exampleInput3"
                                type="text"
                                v-model="fio"
                                placeholder="Введите данные"
                                required
                                
                                @input="Update($event, 'vliceinput')"
                                >
                                </b-form-input>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label">Телефон отправителя</label>
                        <div class="col-sm-9">
                            <b-form-input 
                            class="form-control" 
                            id="us-phone-number-ex" 
                            type="text"
                            v-model="telephone"
                            required
                            placeholder="+7 (000) 000-0000"
                            v-mask="'+7(###) ###-####'"
                            @input="Update($event, 'tel')"
                            >
                            </b-form-input>
                        </div>
                    </div>
                    <div class="form-group row"  v-if="!this.$store.state.flagBasketContainer">
                        <label for="staticEmail" class="col-sm-3 col-form-label">Адрес отправления</label>
                        <div class="col-sm-9">

                                <b-form-input 
                                id="exampleInput4"
                                type="text"
                                v-model="addressotprhis"
                                placeholder="Улица, дом"
                                required
                                @input="Update($event, 'addressotprhis')"
                                >
                                </b-form-input>
                        </div>
                    </div>
                    <div class="form-group row"  v-if="!this.$store.state.flagBasketContainer">
                        <label for="staticEmail" class="col-sm-3 col-form-label">Организация отправитель</label>
                        <div class="col-sm-9">

                                <b-form-input 
                                id="exampleInput15"
                                type="text"
                                :required="presoptionStateFace == 1 ? true : false"
                                v-model="orgotpravit"
                                placeholder="Введите данные"
                                @input="Update($event, 'orgotpravit')"
                                >
                                </b-form-input>
                        </div>
                    </div>
                    <hr>
                    <div class="form-group row"  v-if="!this.$store.state.flagBasketContainer">
                        <label for="staticEmail" class="col-sm-3 col-form-label">ФИО получателя</label>
                        <div class="col-sm-9">
                            <b-form-input 
                                id="exampleInput5"
                                type="text"
                                v-model="fiopoluch"
                                placeholder="Введите данные"
                                @input="Update($event, 'fiopoluch')"
                                required
                                >
                                </b-form-input>
                        </div>
                    </div>
                    <div class="form-group row"  v-if="!this.$store.state.flagBasketContainer">
                        <label for="staticEmail" class="col-sm-3 col-form-label">Адрес получателя</label>
                        <div class="col-sm-9">
                            <b-form-input 
                                id="exampleInput5"
                                type="text"
                                v-model="addresspoluch"
                                placeholder="Улица, дом"
                                @input="Update($event, 'addresspoluch')"
                                required
                                >
                                </b-form-input>
                        </div>
                    </div>
                    <div class="form-group row"  v-if="!this.$store.state.flagBasketContainer">
                        <label for="staticEmail" class="col-sm-3 col-form-label">Организация получатель</label>
                        <div class="col-sm-9">
                            <b-form-input 
                                id="exampleInput6"
                                type="text"
                                :required="presoptionStateFace == 1 ? true : false"
                                v-model="nazorg"
                                placeholder="Введите данные"
                                @input="Update($event, 'nazorg')"
                                >
                                </b-form-input>
                        </div>
                    </div>
                    <div class="form-group row"  v-if="!this.$store.state.flagBasketContainer">
                        <label for="staticEmail" class="col-sm-3 col-form-label">Телефон получателя</label>
                        <div class="col-sm-9">
                                <b-form-input 
                                class="form-control" 
                                id="us-phone-number-ex" 
                                type="text"
                                v-model="telpoluch"
                                required
                                placeholder="+7 (000) 000-0000"
                                v-mask="'+7(###) ###-####'"
                                @input="Update($event, 'telpoluchinput')"
                                >
                                </b-form-input>
                        </div>
                    </div>
					<div v-if="!this.$store.state.flagBasketContainer">
                    <hr>
					</div>
                    <div class="form-group row"
                            id="exampleInputGroup1"
                            label="Emeil address:"
                            label-for="exampleInput1"
                            description="We'll never share your email with anyone else."
                            >
                        <label for="staticEmail" class="col-sm-3 col-form-label">Ваш Email<span class="redstar">*</span></label>
                        <div class="col-sm-9 text-left">
                        
                            <b-form-input id="exampleInput1"
                            type="email"
                            v-model="email"
                            required
                            placeholder="ex@mail.ru"
                            
                             @input="Update($event, 'email')">
                            </b-form-input>
                        </div>
                    </div>
                    <div class="col-sm-12 text-left" v-show="presoptionStateFace == 2"  v-if="!this.$store.state.flagBasketContainer">
                        <b-form-checkbox id="checkbox1"
                            v-model="status"
                            value="accepted"
                            unchecked-value="not_accepted">
                        <a style="color: #13489f" target="_blank" href="https://межрегионтест.рф/posts/pravila-i-usloviya-dostavki-gruzov">Я принимаю условия доставки</a>
                        </b-form-checkbox>
                    </div>
            
        <template v-if="!this.$store.state.flagBasketContainer">
            <div v-if="checked != 2">
                <div class="typepost" v-show="presoptionStateFace == 1">
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-5 col-form-label">Наименование Вашей компании</label>
                        <div class="col-sm-7">
                            <input v-model="urlicorecvizit.nazvkomp" type="text" @input="zakazchikinput" class="form-control" >
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-5 col-form-label">Юридический адрес Вашей компании</label>
                        <div class="col-sm-7">
                            <input v-model="urlicorecvizit.uradresskomp" ype="text" class="form-control" >
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-5 col-form-label">Документ, на основании которого, лицо действует от имени юридического лица</label>
                        <div class="col-sm-7">
                            <input  v-model="urlicorecvizit.dolosnkomur" type="text"  @input="consoleinput" class="form-control" >
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-5 col-form-label">ФИО генерального директора</label>
                        <div class="col-sm-7">
                            <b-form-input 
                                v-model="urlicorecvizit.fiogeneral"
                                id="exampleInput6"
                                type="text"
                                 class="form-control"
                                @input="Update($event, 'vliceDirinput')"
                                >
                            </b-form-input>
                           
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-1 col-form-label">ИНН</label>
                        <div class="col-sm-5">
                            <input v-model="urlicorecvizit.inn" type="text" @input="inninput" class="form-control" >
                        </div>
                        <label for="staticEmail" class="col-sm-1 col-form-label">КПП</label>
                        <div class="col-sm-5">
                            <input v-model="urlicorecvizit.kpp" type="text"  @input="kppinput" class="form-control" >
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-1 col-form-label">ОГРН</label>
                        <div class="col-sm-11">
                            <input v-model="urlicorecvizit.ogrn" type="text" @input="ogrnInput" class="form-control" >
                        </div>
                    </div>
                    <br>
                    <h5>Банковские реквизиты</h5>
                    <br>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-1 col-form-label">Банк</label>
                        <div class="col-sm-5">
                            <input  v-model="urlicorecvizit.bank" @input="bankinput" type="text" class="form-control" >
                        </div>
                        <label for="staticEmail" class="col-sm-1 col-form-label">БИК</label>
                        <div class="col-sm-5">
                            <input  v-model="urlicorecvizit.bik" @input="bikinput" type="text" class="form-control" >
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-1 col-form-label">К/С</label>
                        <div class="col-sm-5">
                            <input v-model="urlicorecvizit.ks"  @input="kschetinput" type="text" class="form-control" >
                        </div>
                        <label for="staticEmail" class="col-sm-1 col-form-label">Р/С</label>
                        <div class="col-sm-5">
                            <input v-model="urlicorecvizit.rs" @input="rschetinput" type="text" class="form-control" >
                        </div>
                    </div>
                </div>
            
                <div class="title-block-new" style="display: none" v-if="1==3" v-show="presoptionStateFace == 1">
                    <div class="div-block-51 _500 w-clearfix">
                        <div class="heading-text-block _500">
                        <div class="div-line"></div>
                        <div class="div-rad"></div>
                        <div class="div-block-50"></div>
                        <div class="div-rad min"></div>
                        <h2 class="heading-13">Куда доставить оригиналы документов?<br></h2>
                        </div>
                    </div>
                </div>
                <div class="typepost" style="display: none  !important;" v-if="1==3" v-show="presoptionStateFace == 1">
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-1 col-form-label">Страна</label>
                        <div class="col-sm-11">
                            <input v-model="originaldocuments.strana" type="text" class="form-control" >
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-1 col-form-label">Город</label>
                        <div class="col-sm-5">
                            <input  v-model="originaldocuments.gorod"  type="text" class="form-control" >
                        </div>
                        <label for="staticEmail" class="col-sm-1 col-form-label">Индекс</label>
                        <div class="col-sm-5">
                            <input  v-model="originaldocuments.index" :maxlength="6" type="text" class="form-control" >
                        </div>
                    </div>
                </div>
            </div>

            <div class="title-block-new" v-show="presoptionStateFace == 2">
                <div class="div-block-51 _500 w-clearfix">
                    <div class="heading-text-block _500">
                    <div class="div-line"></div>
                    <div class="div-rad"></div>
                    <div class="div-block-50"></div>
                    <div class="div-rad min"></div>
                    <h2 class="heading-13">Выберите способ оплаты<br></h2>
                    </div>
                </div>
            </div>

            <div class="typestore-icon" v-show="presoptionStateFace == 2">
                    <div class="typestore-icon-step" v-on:click="presoptionBay(1)">
                        <div class="typestore-icon-step-radio" v-bind:class="{ active: presoptionStateBay == 1 }" @click="presoptionBay(1)"></div>
                        <div class="typestore-icon-step-body">
                            <div class="typestore-icon-step-active" >
                                <img src="img/nal.png" />
                            </div>
                            <span>Наличными курьеру</span>
                        </div>
                    </div>
                    <div class="typestore-icon-step" v-on:click="presoptionBay(2)">
                        <div class="typestore-icon-step-radio" v-bind:class="{ active: presoptionStateBay == 2 }" @click="presoptionBay(2)"></div>
                        <div class="typestore-icon-step-body">
                            <div class="typestore-icon-step-active" >
                                <img src="img/kart.png" />
                            </div>
                            <span>Картой онлайн</span>
                        </div>
                    </div>
            </div>
        </template>
        
		<div id="div-registr" v-if="this.$store.state.backetData.length > 0">
			<registration v-show="calcRegistrGet"></registration>

                 <b-button @click="toaxios" :disabled="this.status != 'accepted'" v-show="calcRegistrGet" type="submit" class="typepost-but-succes button-next" variant="primary">{{ this.presoptionStateBay == 1 ? 'Отправить' : 'Отправить и оплатить'}}</b-button>

		</div>
       
        </b-form>
        <div style="display: none">{{ this.$store.state.checkedclietn }}</div>
        <div id="div-sank"></div>
        <sank  v-if="classNoValid"></sank>
        <div style="height: 300px"></div>
    </div>
</template>
<script>
    import {mapMutations} from 'vuex';
    import {mapGetters} from 'vuex';
	import VueMask from 'v-mask'
    import sank from './sank'
    export default {
        name: 'app',
        data () {
            return {
                telephone: '',
                email: '',
                fio: '',
                validemeil: false,
                classNoValid: false,
                status: 'not_accepted',
                checked: 1,
                fiootpr: '',
                telpoluch: '',
                addressotprhis: '',
                nazorg: '',
                fiopoluch: '',
                orgotpravit: '',
                addresspoluch: '',
                deistvklient: '',
                originaldocuments: {
                    strana: '',
                    gorod: '',
                    index: ''
                },
                urlicorecvizit: {
                    nazvkomp: '',
                    uradresskomp: '',
                    dolosnkomur: '',
                    fiogeneral: '',
                    inn: '',
                    kpp: '',
                    ogrn: '',
                    bank: '',
                    bik: '',
                    ks: '',
                    rs: ''
                }
            }
        },
        computed: {
            ...mapGetters([
            'presoptionStateFace', 'presoptionStateBay', 'calcRegistrGet', 'countDayState', 'periodGetState', 'dateCalenStatePositionRS', 'timeGetState'
            ]),
            returnstr() {
                return this.originaldocuments.strana.length > 0 ? 'Оригинал доставить: Страна' + this.originaldocuments.strana + ', город ' + this.originaldocuments.gorod  + ', индекс: ' + this.originaldocuments.index : ''
            },

        },
        methods: {
            ...mapMutations([
                'presoptionFace', 'presoptionBay', 
            ]),
            updatevaluecheck(evt) {
                //console.log('клиент', evt.target.value)
                this.$store.state.checkedclietn = evt.target.value
            },
            toaxios() {
                if(this.validemeil) {
                    let newdata =  new Date()
                    let today = ( this.$store.state.datestateregular.getDate() < 10 ? '0' : '') +  this.$store.state.datestateregular.getDate() + '.' + (( this.$store.state.datestateregular.getMonth() + 1) < 10 ? '0' : '') + ( this.$store.state.datestateregular.getMonth() + 1) + '.' +  this.$store.state.datestateregular.getUTCFullYear()
                    let todayLast = ((parseInt( this.$store.state.datestateregular.getDate())+parseInt(this.countDayState)) < 10 ? '0' : '') + (parseInt( this.$store.state.datestateregular.getDate())+parseInt(this.countDayState)) + '.' + (( this.$store.state.datestateregular.getMonth() + 1) < 10 ? '0' : '') + ( this.$store.state.datestateregular.getMonth() + 1) + '.' +  this.$store.state.datestateregular.getUTCFullYear()
                    let arrbask = this.$store.state.backetData.map((item, index) => {
                        return '<tr><td colspan="4">'+ (item.title == 1 ? 'Документы' :  item.title == 2 ? 'Груз' : 'Контейнер') + ', вес:' + item.parametr  + (item.gabarit ? ', габариты '  +  item.gabarit : '') +  (item.comments ? item.comments : '')+ '</td></tr>'
                    })
                    
                    let deistvklientlet = this.deistvklient.length > 0 ? 'Номер договора ' + this.deistvklient : ''

                    let regularpost = this.periodGetState > 1 ? cashregular : ''
                    let cashregulararr =  {
                            30: 'Каждый день',
                            4: 'Раз в неделю',
                            8: 'Два раза в неделю',
                            1: 'Раз в месяц',
                            2: 'Два раза в месяц'
                        }

                    let timerarr =  {
                            1:"09:00 - 18:00",
                            2:"09:00-14:00",
                            3:"14:00-18:00"
                        }
                    

                    let cashurlico = `
                    <table cellspacing="0" cellpadding="0" width="800">
                        <tr><td>Наименование Вашей компании</td><td>`+ this.urlicorecvizit.nazvkomp +`</td></tr>
                        <tr><td>Юридический адрес Вашей компании</td><td>`+ this.urlicorecvizit.uradresskomp +`</td></tr>
                        <tr><td>Документ, на основании которого, лицо действует от имени юридического лица</td><td>`+ this.urlicorecvizit.dolosnkomur +`</td></tr>
                        <tr><td>ФИО генерального директора</td><td>`+ this.urlicorecvizit.fiogeneral +`</td></tr>
                        <tr><td>ИНН</td><td>`+ this.urlicorecvizit.inn +`</td></tr>
                        <tr><td>КПП</td><td>`+ this.urlicorecvizit.kpp +`</td></tr>
                        <tr><td>ОГРН</td><td>`+ this.urlicorecvizit.ogrn +`</td></tr>
                        <tr><td colspan="2">Банковские реквизиты</td></tr>
                        <tr><td>Банк</td><td>`+ this.urlicorecvizit.bank +`</td></tr>
                        <tr><td>БИК</td><td>`+ this.urlicorecvizit.bik +`</td></tr>
                        <tr><td>К/С</td><td>`+ this.urlicorecvizit.ks +`</td></tr>
                        <tr><td>Р/С</td><td>`+ this.urlicorecvizit.rs +`</td></tr>
                    </table>`


                    let cashurlicoContainder = this.urlicorecvizit.nazvkomp.length > 0 ? cashurlico : ''






                    let cashregular = timerarr[this.timeGetState] ? ('<hr>Повторять ' +cashregulararr[this.periodGetState] + ', начинать повтор с ' + this.dateCalenStatePositionRS + ', время забора ' + timerarr[this.timeGetState]) : ''
                    //console.log(cashregular, 'TEST MAIL')
                    let container = this.$store.state.conteiner.nazfabric.length > 1 ? '<hr>' + cash : ''

                    let cash = `
                    <table cellspacing="0" cellpadding="0" width="800">
                        <tr><td>Название фабрики / место загрузки</td><td>`+ this.$store.state.conteiner.nazfabric+`</td></tr>
                        <tr><td>Контактное лицо на месте загрузки</td><td>`+ this.$store.state.conteiner.contactlico+`</td></tr>
                        <tr><td>Имя, под которым Вы известны поставщику</td><td>`+ this.$store.state.conteiner.imapostizv+`</td></tr>
                        <tr><td>Маркировка груза (№ заказа, инвойса, имя заказчиа)</td><td>`+ this.$store.state.conteiner.markgruznomer+`</td></tr>
                        <tr><td>Общий объём груза</td><td>`+ this.$store.state.conteiner.obshobg+`</td></tr>
                        <tr><td>Общий вес груза</td><td>`+ this.$store.state.conteiner.obshves+`</td></tr>
                        <tr><td>Общая стоимость груза</td><td>`+ this.$store.state.conteiner.obshstoimgruz+`</td></tr>
                        <tr><td>Код товара по ТНВЭД</td><td>`+ this.$store.state.conteiner.kodtovaratnved+`</td></tr>
                        <tr><td>Полное наименование товара, технические характеристики, материал, размеры, назначение (ГРАФА 31)</td><td>`+ this.$store.state.conteiner.kodtovaratnved+`</td></tr>
                        <tr><td>Модель или Артикул</td><td>`+ this.$store.state.conteiner.modelartic+`</td></tr>
                        <tr><td>Торговая марка</td><td>`+ this.$store.state.conteiner.torgmark+`</td></tr>
                    </table>`

                    let cashblock =  this.$store.state.backetData.map((item, index) => {
                        let title = item.title == 1 ? 'Документы' : item.title == 2 ? 'Груз' : 'Контейнер'
                        let gabarit = item.gabarit ? item.gabarit : ''
                        let hrupkoe = item.hrupkoe ? 'Хрупкое' : ''
                        let parametr = item.parametr
                        let price = item.price + 'р. '
                        let comments = item.comments ? item.comments : ''
                        console.log('bask', '<tr><td>' + title +'  '+ gabarit + ' ' + parametr + ' '+ price + ' '+ hrupkoe + ' ' + comments +'</td></tr>', this.$store.state.backetData)
                        return '<tr><td colspan="4">' + title +'  '+ gabarit + ' ' + parametr + ' '+ price + ' '+ hrupkoe + ' ' + comments +'</td></tr>'
                    })

                    let cashblocklet = ''
                    let arrbasklet = ''

                    let urlicorekvizit = () => {
                        if(this.$store.state.zakazchik.length > 0) {
                            return 'Компания: ' + this.$store.state.zakazchik + ', ' + 'Юридический адрес Вашей компании'
                        }
                    }



                    function cashblockfunc() {
                        for(let i = 0; i<cashblock.length; i++) {
                            //console.log(cashblock[i])
                            cashblocklet+=cashblock[i]
                        }
                    }

                    function arrbaskfunc() {
                        for(let i = 0; i<arrbask.length; i++) {
                            //console.log(arrbask[i])
                            arrbasklet+=arrbask[i]
                        }
                    }
                    cashblockfunc()
                    arrbaskfunc()

                    let htmlcont = `
                    <html>
                        <style>
                            table td {
                                border: 1px solid #1e457e;
                                padding: 5px;
                                text-align: center;
                                margin: 0px;
                                border-collapse: collapse;
                            }
                        </style>
                        <body>
                            <h4>Ваша заявка принята в работу! Наши специалисты подготовят расчет стоимости в течение 24 часов.</h4>
                        </body>
                    </html>`
                      
                    
                    let html = `<html>
                    <style>
                        table td {
                            border: 1px solid #1e457e;
                            padding: 5px;
                            text-align: center;
                            margin: 0px;
                            border-collapse: collapse;
                        }
                    </style>
                    <body>
                        <h2>Добрый день!</h3>
                        <b>Ваш заказ принят в работу. </b>

                        <table cellspacing="0" cellpadding="0" width="800" style="border-collapse: collapse;">
                            <tr>
                                <td style="background: #1e457e; color: #fff">Отправитель<br></td>
                                <td rowspan="2">` + this.telephone + `<br></td>
                                <td rowspan="2">Дата отправки<br></td>
                                <td rowspan="2">` + today + `</td>
                            </tr>
                            <tr>
                                <td>` + this.fio + `<br></td>
                            </tr>
                            <tr>
                                <td colspan="2">Организация: ` + this.orgotpravit + `<br></td>
                                <td rowspan="2">Предварительная дата доставки<br></td>
                                <td rowspan="2">` + todayLast + `</td>
                            </tr>
                            <tr>
                                <td colspan="2"> ` + ( this.$store.state.citySetText.length > 0 ? this.$store.state.citySetText : this.$store.state.citynoRusSendStore) + ', '+ this.addressotprhis + ', '+ this.$store.state.indexSet+`<br></td>
                            </tr>
                            <tr>
                                <td rowspan="2">Подпись отпраителя<br></td>
                                <td rowspan="2"></td>
                                <td colspan="2" style="background: #1e457e; color: #fff">Прием отправления<br></td>
                            </tr>
                            <tr>
                                <td>ФИО сотрудника<br></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td style="background: #1e457e; color: #fff">получатель</td>
                                <td rowspan="2"> ` + this.telpoluch + `<br></td>
                                <td>Дата, время приёма<br></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>` + this.fiopoluch + `<br></td>
                                <td colspan="2"  style="background: #1e457e; color: #fff">Данные получателя<br></td>
                            </tr>
                            <tr>
                                <td colspan="2">Организация: ` + this.nazorg + `<br></td>
                                <td>ФИО</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td colspan="2">` + ( this.$store.state.cityGetText.length  > 0 ? this.$store.state.cityGetText : this.$store.state.citynoRusStore) + ', ' + this.addresspoluch +', '+ this.$store.state.indexGet+`</td>
                                <td>Должность</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Дата, время получения</td>
                                <td></td>
                                <td rowspan="2" colspan="2">`+this.$store.state.commentszakaz+`</td>
                                
                            </tr>
                            <tr>
                                <td>Подпись получателя</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td colspan="4" style="background: #1e457e; color: #fff">Описание вложения<br></td>
                            </tr>
                            `+ cashblocklet +`
                        </table>
                        <br><br>
                        `+ deistvklientlet +`
                        <br><br><a href="https://межрегионтест.рф/posts/pravila-i-usloviya-dostavki-gruzov">Условия доставки</a>
                    </body>
                    </html>`
//<table cellspacing="0" cellpadding="0" width="800"><tr><td>Описание груза</td></tr>` + cashblocklet + `</table>
                    let basketdatab = this.$store.state.backetData[0].title
                    console.log('MAIL', this.$store.state.backetData[0].title)
                    this.axios({
                            method: 'POST',
                            url: 'https://api.mailhandler.ru/message/send/',
                            headers: {
                                "X-Secure-Token": "cff7fac0-37de-48ea-abb4-d30d3d29f803",
                                "Accept": "application/json",
                                "Content-Type": "application/json",
                            },
                            data: {
                            'from': 'lordenas@gmail.com',
                            'to': [this.email],
                            'subject': 'Заказ успешно принят в работу.',
                            'html_body':  basketdatab == 3 ? htmlcont : html
                        }
                    }).then(response => {
                        console.log(response)
                    })
                } else {
                    return false
                }
            },
            consoleinput (evt) {
                this.$store.state.documentUrlico = evt.target.value
                this.$store.state.mailPoshta =  this.email
                //console.log(evt.target.value, '-', this.$store.state.documentUrlico)
            },
            Update(evt,item) {
                //console.log(ind)
                //console.log(evt)
                this.$store.state.inputClintInfo[item] = evt
                console.log(this.$store.state.inputClintInfo[item])
                let validMail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
                this.validemeil = validMail.test(this.email)
            },
            ogrnInput(evt) {
                this.$store.state.ogrn =  evt.target.value
                this.$store.state.mailPoshta =  this.email
            },

            zakazchikinput(evt) {
                this.$store.state.zakazchik =  evt.target.value
            },
            kppinput(evt) {
                this.$store.state.kpp =  evt.target.value
            },
            inninput(evt) {
                this.$store.state.inn =  evt.target.value
            },
            rschetinput(evt) {
                this.$store.state.rschet =  evt.target.value
            },   
            kschetinput(evt) {
                this.$store.state.kschet =  evt.target.value
                this.$store.state.mailPoshta =  this.email
            },
            bankinput(evt) {
                this.$store.state.bank =  evt.target.value
            },
            bikinput(evt) {
                this.$store.state.bik =  evt.target.value
            },

            


            onSubmitValid(evt) {
                evt.preventDefault();
                //alert(JSON.stringify(this.form));
                if(this.validemeil) {
                    this.classNoValid = true
                    window.scrollBy(0,800)
                } else {
                    this.classNoValid = false
                    
                }
            }
        },
        components: {
            sank
        },
    }
</script>

<style scoped>
    .col-form-label {
        text-align: left;
    }
    .typestore-icon-step {
        width: 45%;
    }
    .classNoValid {
        color: red;
    }
    .client-urlic {
        margin: 50px 0;
    }
</style>
