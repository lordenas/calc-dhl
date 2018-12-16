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
                        <label for="staticEmail" class="col-sm-4 col-form-label">Номер договора</label>
                        <div class="col-sm-8">
                            <input v-model="deistvklient" type="text" class="form-control" >
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-4 col-form-label">ФИО отправителя<span class="redstar">*</span></label>
                        <div class="col-sm-8">
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
                        <label for="staticEmail" class="col-sm-4 col-form-label">Телефон отправителя<span class="redstar">*</span></label>
                        <div class="col-sm-8">
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
                        <label for="staticEmail" class="col-sm-4 col-form-label">Адрес отправления<span class="redstar">*</span></label>
                        <div class="col-sm-8">

                                <b-form-input 
                                id="exampleInput4"
                                type="text"
                                v-model="addressotprhis"
                                placeholder="Улица, дом, кв/офис"
                                required
                                @input="Update($event, 'addressotprhis')"
                                >
                                </b-form-input>
                        </div>
                    </div>
                    <div class="form-group row"  v-if="!this.$store.state.flagBasketContainer">
                        <label for="staticEmail" class="col-sm-4 col-form-label">Организация отправитель<span  v-show="presoptionStateFace == 1" class="redstar">*</span></label>
                        <div class="col-sm-8">

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
                        <label for="staticEmail" class="col-sm-4 col-form-label">ФИО получателя<span class="redstar">*</span></label>
                        <div class="col-sm-8">
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
                        <label for="staticEmail" class="col-sm-4 col-form-label">Адрес получателя<span class="redstar">*</span></label>
                        <div class="col-sm-8">
                            <b-form-input 
                                id="exampleInput5"
                                type="text"
                                v-model="addresspoluch"
                                placeholder="Улица, дом, кв/офис"
                                @input="Update($event, 'addresspoluch')"
                                required
                                >
                                </b-form-input>
                        </div>
                    </div>
                    <div class="form-group row"  v-if="!this.$store.state.flagBasketContainer">
                        <label for="staticEmail" class="col-sm-4 col-form-label">Организация получатель<span  v-show="presoptionStateFace == 1" class="redstar">*</span></label>
                        <div class="col-sm-8">
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
                        <label for="staticEmail" class="col-sm-4 col-form-label">Телефон получателя<span class="redstar">*</span></label>
                        <div class="col-sm-8">
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
                        <label for="staticEmail" class="col-sm-4 col-form-label">Ваш Email<span class="redstar">*</span></label>
                        <div class="col-sm-8 text-left">
                        
                            <b-form-input id="exampleInput1"
                            type="email"
                            v-model="email"
                            required
                            placeholder="ex@mail.ru"
                            @input="Update($event, 'email')">
                            </b-form-input>
                        </div>
                    </div>

            
        <template v-if="!this.$store.state.flagBasketContainer">
            <div v-if="checked != 2">
                <div class="typepost" v-show="presoptionStateFace == 1">

                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-5 col-form-label">Наименование Вашей компании<span class="redstar">*</span></label>
                        <div class="col-sm-7">
                             <b-form-input :required="presoptionStateFace == 1 ? true : false" v-model="urlicorecvizit.nazvkomp"  type="text" @input="zakazchikinput" class="form-control" > </b-form-input>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-5 col-form-label">Юридический адрес Вашей компании<span class="redstar">*</span></label>
                        <div class="col-sm-7">
                             <b-form-input :required="presoptionStateFace == 1 ? true : false" v-model="urlicorecvizit.uradresskomp"  @input="Update($event, 'uradresskomp')" type="text" class="form-control" > </b-form-input>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-5 col-form-label">Документ, на основании которого, лицо действует от имени юр. лица (в род. падеже)<span class="redstar">*</span></label>
                        <div class="col-sm-7">
                            <b-form-input :required="presoptionStateFace == 1 ? true : false" v-model="urlicorecvizit.dolosnkomur" type="text"  @input="consoleinput" class="form-control" > </b-form-input>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-5 col-form-label">ФИО генерального директора <span class="redstar">*</span></label>
                        <div class="col-sm-7">
                            <b-form-input 
                                id="exampleInput6"
                                type="text"
                                :required="presoptionStateFace == 1 ? true : false"
                                class="form-control"
                                @input="Update($event, 'vliceDirinput')"
                                >
                            </b-form-input>

                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-1 col-form-label">ИНН<span class="redstar">*</span></label>
                        <div class="col-sm-5">
                            <b-form-input v-model="urlicorecvizit.inn" :required="presoptionStateFace == 1 ? true : false" type="text" @input="inninput($event)" class="form-control" > </b-form-input>
                        </div>
                        <label for="staticEmail" class="col-sm-1 col-form-label">КПП<span class="redstar">*</span></label>
                        <div class="col-sm-5">
                            <b-form-input  v-model="urlicorecvizit.kpp" :required="presoptionStateFace == 1 ? true : false" type="text"  @input="kppinput($event)" class="form-control" ></b-form-input>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-1 col-form-label">ОГРН<span class="redstar">*</span></label>
                        <div class="col-sm-11">
                            <b-form-input  v-model="urlicorecvizit.ogrn" :required="presoptionStateFace == 1 ? true : false" type="text" @input="ogrnInput($event)" class="form-control" > </b-form-input>
                        </div>
                    </div>
                    <br>
                    <h5>Банковские реквизиты</h5>
                    <br>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-1 col-form-label">Банк<span class="redstar">*</span></label>
                        <div class="col-sm-5">
                             <b-form-input  v-model="urlicorecvizit.bank" :required="presoptionStateFace == 1 ? true : false" @input="bankinput($event)" type="text" class="form-control" > </b-form-input>
                        </div>
                        <label for="staticEmail" class="col-sm-1 col-form-label">БИК<span class="redstar">*</span></label>
                        <div class="col-sm-5">
                             <b-form-input   v-model="urlicorecvizit.bik" :required="presoptionStateFace == 1 ? true : false" @input="bikinput($event)" type="text" class="form-control" > </b-form-input>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-1 col-form-label">К/С<span class="redstar">*</span></label>
                        <div class="col-sm-5">
                             <b-form-input  v-model="urlicorecvizit.ks" :required="presoptionStateFace == 1 ? true : false" @input="kschetinput($event)" type="text" class="form-control" > </b-form-input>
                        </div>
                        <label for="staticEmail" class="col-sm-1 col-form-label">Р/С<span class="redstar">*</span></label>
                        <div class="col-sm-5">
                             <b-form-input  v-model="urlicorecvizit.rs" :required="presoptionStateFace == 1 ? true : false" @input="rschetinput($event)" type="text" class="form-control" > </b-form-input>
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
                              <b-form-input v-model="originaldocuments.strana" type="text" class="form-control" > </b-form-input>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-1 col-form-label">Город</label>
                        <div class="col-sm-5">
                             <b-form-input   v-model="originaldocuments.gorod"  type="text" class="form-control" > </b-form-input>
                        </div>
                        <label for="staticEmail" class="col-sm-1 col-form-label">Индекс</label>
                        <div class="col-sm-5">
                             <b-form-input  v-model="originaldocuments.index" :maxlength="6" type="text" class="form-control" > </b-form-input>
                        </div>
                    </div>
                </div>
            </div>
        <br><br>
                    <div class="col-sm-12 text-left"  v-if="!this.$store.state.flagBasketContainer">
                        <b-form-checkbox id="checkbox1"
                            v-model="status"
                            value="accepted"
                            unchecked-value="not_accepted">
                        <a style="color: #13489f" target="_blank" href="https://межрегионтест.рф/posts/pravila-i-usloviya-dostavki-gruzov">Я принимаю условия доставки</a>
                        </b-form-checkbox>
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
			

            <template v-if="!this.$store.state.flagBasketContainer">
                 <b-button @click="toaxios" :disabled="this.status != 'accepted'" v-show="calcRegistrGet" type="submit" class="typepost-but-succes button-next" variant="primary">{{ this.presoptionStateBay == 1 ? 'Отправить' : 'Отправить и оплатить'}}</b-button>
            </template>
                <b-button @click="toaxios" :disabled="!this.$store.state.flagBasketContainer" v-show="this.$store.state.flagBasketContainer" type="submit" class="typepost-but-succes button-next" variant="primary">{{ this.presoptionStateBay == 1 ? 'Отправить' : 'Отправить и оплатить'}}</b-button>
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
    //import { RussianNameProcessorN } from './methods/russsklon'

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
                },
                debounceMilliseconds: 50,
               inputProps: {
					id: "autosuggest__input",
					onInputChange: this.fetchResults,
					placeholder: "Введите адрес",
					class: "form-control",
					name: "Адрес"
				},
				suggestions: [],
				sectionConfigs: {
					destinations: {
					limit: 10,
					onSelected: selected => {
                        this.$store.state.fiovroditpad = selected
						this.selected = selected;
					}
					},
					default: {
						onSelected: selected => {
							this.searchText = selected.item.name;
							this.doSearch(this);
						}
					}
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
                console.log('клиент', evt.target.value)

                this.$store.state.checkedclietn = evt.target.value
            },

            toaxios() {
                let htmlFooter = `<br><br>
                <table style="" class="es-wrapper" align="left" width="800" cellspacing="0" cellpadding="0">
                        <tbody>
                            <tr>
                                <td class="esd-email-paddings" valign="top">
                                    <table class="es-content esd-header-popover" align="center" width="800" cellspacing="0" cellpadding="0">
                                        <tbody>
                                            <tr>
                                                <td class="esd-stripe">
                                                    <table class="es-content-body" style="background-color: rgb(255, 255, 255);" width="600" cellspacing="0" cellpadding="0" bgcolor="#fff" align="center">
                                                        <tbody>
                                                            <tr>
                                                                <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
                                                                    <!--[if mso]><table width="560"><tr><td width="180" valign="top"><![endif]-->
                                                                    <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="border-right: 1px solid #CCC">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="es-m-p0r es-m-p20b esd-container-frame" esd-custom-block-id="24500" width="180" valign="top" align="center">
                                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class="esd-block-image"  align="center">
                                                                                                    <a target="_blank"> <img class="adapt-img" src="https://demo.stripo.email/content/guids/359a433e-05af-4d1e-aff7-a7dc6b2e76e0/images/54611544884096224.jpg" alt="" style="display: block;" width="131"> </a>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="esd-block-text" align="left">
                                                                                                    <p style="font-size: 18px;">Филиппович</p>
                                                                                                    <p style="font-size: 18px;">Анастасия</p>
                                                                                                    <p style="font-size: 11px;">логист</p>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <!--[if mso]></td><td width="20"></td><td width="360" valign="top"><![endif]-->
                                                                    <table cellspacing="0" cellpadding="0" align="right">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="esd-container-frame" width="360" align="left">
                                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class="esd-block-text es-p20r" align="left">
                                                                                                    <p align="left" style="color: #767171; text-align: left; ">Всероссийский Центр Сертификации «МЕЖРЕГИОНТЕСТ» <br>Тел. 8-800-333-60-84 доб. 263 <br>Моб. +7 (911) 130-14-39 196084, г. Санкт-Петербург, ул. Новорощинская, д. 4 <br>105066, г. Москва, ул. Бауманская, д.6</p>
                                                                                                    <p align="left"style="color: #767171; text-align: left; line-height: 200%;"><u>filippovich@megregiontest.ru</u></p>
                                                                                                    <p align="left" style="color: #767171; text-align: left; line-height: 200%;"><u><a href="https://межрегионтест.рф/">www.межрегионтест.рф</a></u></p>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="esd-block-image" align="left">
                                                                                                    <a href="https://vk.com/megregiontestinfo" target="_blank"> <img src="https://demo.stripo.email/content/guids/359a433e-05af-4d1e-aff7-a7dc6b2e76e0/images/33781544884439445.png" alt="" style="display: block; float: left; margin: 0 10px 0 0" width="29"> </a>
                                                                                                    <a href="https://www.facebook.com/megregiontest/" target="_blank"> <img class="adapt-img" src="https://demo.stripo.email/content/guids/359a433e-05af-4d1e-aff7-a7dc6b2e76e0/images/79081544884450046.png" alt="" style="display: block;  float: left; margin: 0 10px 0 0" width="29"> </a>
                                                                                                    <a href="https://www.youtube.com/channel/UCioaEQ54DFAwRLN8ilP3gWQ" target="_blank"> <img class="adapt-img" src="https://demo.stripo.email/content/guids/359a433e-05af-4d1e-aff7-a7dc6b2e76e0/images/69971544884456656.png" alt="" style="display: block;" width="43"> </a>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <!--[if mso]></td></tr></table><![endif]-->
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="es-content esd-footer-popover" cellspacing="0" cellpadding="0" align="center">
                                        <tbody>
                                            <tr>
                                                <td class="esd-stripe">
                                                    <table class="es-content-body" width="800" align="center" cellspacing="0" cellpadding="0">
                                                        <tbody>
                                                            <tr>
                                                                <td class="esd-structure es-p20t es-p20r es-p20l" align="center">
                                                                    <table width="100%" cellspacing="0" cellpadding="0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="esd-container-frame" width="800" valign="top">
                                                                                    <table width="100%" cellspacing="0" cellpadding="0" align="center">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class="esd-block-text" align="left">
                                                                                                    <p>Нам доверяют:</p>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr align="center">
                                                                                                <td class="esd-block-image" align="center">
                                                                                                    <center><img class="adapt-img" src="https://demo.stripo.email/content/guids/359a433e-05af-4d1e-aff7-a7dc6b2e76e0/images/50861544884617839.jpg" alt="" style="display: block;" align="center" width="427">  </center>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="esd-block-text" align="left">
                                                                                                    <p style="font-size: 8px; color: #767171;"><br></p>
                                                                                                    <p style="font-size: 8px; color: #767171;">Данное сообщение и все его вложения содержат сведения, относящиеся к коммерческой тайне компании. Просим Вас использовать полученную информацию только в соответствии с ФЗ № 98-ФЗ «О коммерческой тайне» и не разглашать ее (п. 9 ст. 3 ФЗ №98-ФЗ). Если Вы получили это сообщение по ошибке, то должны удалить полученную информацию (письмо). Нарушение ФЗ № 98-ФЗ может повлечь уголовную, административную, гражданско-правовую или иную ответственность, предусмотренную действующим законодательством РФ.</p>
                                                                                                    <p style="font-size: 8px; color: #767171;"><br></p>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr align="center">
                                                                                                <td class="esd-block-image" align="center">
                                                                                                    <center> <a href="https://межрегионтест.рф/sluzhebnyy-kontrol" style="display: contents;" target="_blank" align="center"> <img class="adapt-img" src="https://demo.stripo.email/content/guids/359a433e-05af-4d1e-aff7-a7dc6b2e76e0/images/37071544884780392.png" alt="" style="display: block; text-align: center;" width="229"> </a> </center>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="esd-block-text" align="left">
                                                                                                    <p style="font-size: 8px; color: #767171;">В целях повышения качества предоставляемых услуг, просьба направлять все замечания и пожелания в службу клиентского сервиса. Все обращения будут внимательно и тщательно рассмотрены в обязательном порядке. service@megregiontest.ru</p>
                                                                                                    <p style="font-size: 8px; color: #767171;"><br></p>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>`
        
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
                        let comments = item.comments ? '<br>'+item.comments : ''
                        //console.log('bask', '<tr><td>' + title +'  '+ gabarit + ' ' + parametr + ' '+ hrupkoe + ' ' + comments +'</td></tr>', this.$store.state.backetData)
                        return '<tr><td colspan="4">' + title +'  '+ gabarit + ' ' + parametr + ' '+ hrupkoe + ' ' + comments +'</td></tr>'
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
                    let randmail = this.$store.state.randomnumber + ' '
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
                            <p><span style="font-size: 16px">`+this.$store.state.randomnumber+' '+`<</span></p>

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
                        .es-wrapper td {
                            border: none !important;
                            padding: 0px;
                            text-align: center;
                            margin: 0px;
                            border-collapse: collapse;
                        }
                    </style>
                    <body>
                        <h2 style="font-size: 16px">Добрый день!</h3>
                        
                        <p><span style="font-size: 16px">Ваш заказ принят в работу. </span></p>
                        
                        <table  cellspacing="0" cellpadding="0" width="800" style="border-collapse: collapse;">
                            <tr>
                                <td style="border: none !important; text-align: left;"  width="500" ><img src="http://tester123123.ucoz.ru/hosting/Screenshot_1.jpg" width="500" /></td>
                                <td style="border: none !important; text-align: right;"><h3 style="color: #1e457e">Накладная:<br> № `+this.$store.state.randomnumber+' '+`</h3></td>
                            </tr> 
                        </table>

                        <br>
                        <table cellspacing="0" cellpadding="0" width="800" style="border-collapse: collapse;">
                            <tr>
                                <td style="background: #1e457e; color: #fff">Отправитель<br></td>
                                <td rowspan="2">` + this.telephone + `<br></td>
                                <td rowspan="2"  style="color: #1e457e">Дата отправки<br></td>
                                <td rowspan="2">` + today + `</td>
                            </tr>
                            <tr>
                                <td>` + this.fio + `<br></td>
                            </tr>
                            <tr>
                                <td colspan="2">` + (this.orgotpravit.length > 0 ? 'Организация: ' + this.orgotpravit : '') + `<br></td>
                                <td rowspan="2"  style="color: #1e457e">Предварительная дата<br> доставки<br></td>
                                <td rowspan="2">` + todayLast + `</td>
                            </tr>
                            <tr>
                                <td colspan="2"> ` + ( this.$store.state.citySetText.length > 0 ? this.$store.state.citySetText : this.$store.state.citynoRusSendStore) + ', '+ this.addressotprhis + ' '+ this.$store.state.indexSet+`<br></td>
                            </tr>
                            <tr>
                                <td rowspan="2"  style="color: #1e457e">Подпись<br> отпраителя<br></td>
                                <td rowspan="2"></td>
                                <td colspan="2" style="background: #1e457e; color: #fff">Прием отправления<br></td>
                            </tr>
                            <tr>
                                <td>ФИО сотрудника<br></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td style="background: #1e457e; color: #fff">Получатель</td>
                                <td rowspan="2"> ` + this.telpoluch + `<br></td>
                                <td>Дата, время приёма<br></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>` + this.fiopoluch + `<br></td>
                                <td colspan="2"  style="background: #1e457e; color: #fff">Данные получателя<br></td>
                            </tr>
                            <tr>
                                <td colspan="2">` + (this.nazorg.length > 0 ? 'Организация: ' + this.nazorg : '') +`<br></td>
                                <td>ФИО</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td colspan="2">` + ( this.$store.state.cityGetText.length  > 0 ? this.$store.state.cityGetText : this.$store.state.citynoRusStore) + ', ' + this.addresspoluch +' '+ this.$store.state.indexGet+`</td>
                                <td>Должность</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Дата, время получения</td>
                                <td></td>
                                <td rowspan="2" colspan="2">`+this.$store.state.commentszakaz+`</td>
                                
                            </tr>
                            <tr>
                                <td  style="color: #1e457e">Подпись <br>получателя</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td  colspan="2" style="background: #1e457e; color: #fff">Способ оплаты<br></td>
                                <td  colspan="2"  style="background: #1e457e; color: #fff">Стоимость доставки</td>

                            </tr>
                            <tr>
                                <td  colspan="2">`+ (this.presoptionStateFace == 1 ? 'По договору' : (this.presoptionStateBay == 1 ? 'Наличными курьеру' : 'Картой онлайн')) + `</td>
                                <td  colspan="2">`+ this.$store.state.tarifcalc + ` руб. </td>
                            </tr>
                            <tr>
                                <td colspan="4" style="background: #1e457e; color: #fff">Описание вложения<br></td>
                            </tr>
                            `+ cashblocklet +`
                        </table>
                        <br><br>
                        `+ deistvklientlet +`
                        <br><a href="https://межрегионтест.рф/posts/pravila-i-usloviya-dostavki-gruzov">Ознакомиться с условиями доставки</a>
                    </body>
                    </html>`
                    let basketdatab = this.$store.state.backetData[0].title
                    //console.log('MAIL', this.$store.state.backetData[0].title)
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
                            'html_body': basketdatab == 3 ? htmlcont + htmlFooter : html + htmlFooter
                        }
                    }).then(response => {
                        console.log(response)
                    })
                    //отправка организации
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
                            'to': ['lordenas@gmail.com'],
                            'subject': 'Заказ успешно принят в работу.',
                            'html_body':  basketdatab == 3 ? htmlcont + cash + cashurlicoContainder + htmlFooter : html + cash + cashurlicoContainder +htmlFooter
                        }
                    }).then(response => {
                        console.log(response)
                    })



                } else {
                    return false
                }
            },
            consoleinput (evt) {
                this.$store.state.documentUrlico = evt
                this.$store.state.mailPoshta =  this.email
                //console.log(evt.target.value, '-', this.$store.state.documentUrlico)
            },
            Update(evt,item) {
                //console.log(ind)
                if(item == 'vliceDirinput') {
                    	try {
                            var rn = new RussianName(evt);
                            var pred = rn.fullName(rn.gcaseRod);
                            console.log(pred)
                            this.$store.state.fiovroditpad = pred
                        } catch(e) {
                             this.$store.state.fiovroditpad = evt
                        }
                }
                //console.log(evt)
                this.$store.state.inputClintInfo[item] = evt
                //console.log(this.$store.state.inputClintInfo[item])
                let validMail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
                this.validemeil = validMail.test(this.email)
            },
            ogrnInput(evt) {
                this.$store.state.ogrn =  evt
                this.$store.state.mailPoshta =  this.email
            },

            zakazchikinput(evt) {
                this.$store.state.zakazchik =  evt
            },
            kppinput(evt) {
                this.$store.state.kpp =  evt
            },
            inninput(evt) {
                this.$store.state.inn =  evt
            },
            rschetinput(evt) {
                this.$store.state.rschet =  evt
            },   
            kschetinput(evt) {
                this.$store.state.kschet =  evt
                this.$store.state.mailPoshta =  this.email
            },
            bankinput(evt) {
                this.$store.state.bank =  evt
            },
            bikinput(evt) {
                this.$store.state.bik =  evt
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

<style>
    .autosuggest__results .autosuggest__results_item {
        cursor: pointer;
    }
    
    .autosuggest__results ul {
        list-style: none;
    }
    .autosuggest__results {
        font-weight: 300;
    }
    .autosuggest__results {
        font-weight: 300;
        margin: 0;
        position: absolute;
        z-index: 10000001;
        width: 100%;
        border: 1px solid #e0e0e0;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        background: white;
        padding: 0px;
        max-height: 400px;
        overflow-y: scroll;
    }

    .autosuggest__results ul {
        list-style: none;
        padding-left: 0;
        margin: 0;
    }
    .autosuggest__results .autosuggest__results_item {
        cursor: pointer;
        padding: 15px;
    }

    #autosuggest ul:nth-child(1) > .autosuggest__results_title {
        border-top: none;
    }

    .autosuggest__results ul {
        list-style: none;
    }

    .autosuggest__results ul li {
        display: block;
        list-style-image: none;
        list-style-position: outside;
        list-style-type: none;
        text-align: left;
    }

    .autosuggest__results ul li:hover {
        background: #CCC;
    }

    .autosuggest__results .autosuggest__results_title {
        color: gray;
        font-size: 11px;
        margin-left: 0;
        padding: 15px 13px 5px;
        border-top: 1px solid lightgray;
    }
</style>

<style scoped>
    .redstar {
        font-size: 19px;
        color: red;
        position: relative;
        top: 0;
    }
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
