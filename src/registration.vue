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
                      <div>{{ checked == 1 && presoptionStateFace == 1 ? 'Все поля заполняются в родительном падеже' : '' }}</div>
                        <br>
                        <br>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-5 col-form-label">Наименование Вашей компании<span class="redstar">*</span></label>
                        <div class="col-sm-7">
                             <b-form-input :required="presoptionStateFace == 1 ? true : false" v-model="urlicorecvizit.nazvkomp"  type="text" @input="zakazchikinput" class="form-control" > </b-form-input>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-5 col-form-label">Юридический адрес Вашей компании<span class="redstar">*</span></label>
                        <div class="col-sm-7">
                             <b-form-input :required="presoptionStateFace == 1 ? true : false" v-model="urlicorecvizit.uradresskomp" ype="text" class="form-control" > </b-form-input>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-5 col-form-label">Документ, на основании которого, лицо действует от имени юридического лица<span class="redstar">*</span></label>
                        <div class="col-sm-7">
                            <b-form-input :required="presoptionStateFace == 1 ? true : false" v-model="urlicorecvizit.dolosnkomur" type="text"  @input="consoleinput" class="form-control" > </b-form-input>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-5 col-form-label">ФИО генерального директора <span class="redstar">*</span></label>
                        <div class="col-sm-7">
                            <b-form-input 
                                v-model="urlicorecvizit.fiogeneral"
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
                        <label for="staticEmail" class="col-sm-5 col-form-label">ФИО генерального директора <span class="redstar">*</span></label>
                        <div class="col-sm-7">
                            <vue-autosuggest
                                ref="autocomplete"
                                :suggestions="suggestions"
                                :inputProps="inputProps"
                                :sectionConfigs="sectionConfigs"
                                :renderSuggestion="renderSuggestion"
                                :getSuggestionValue="getSuggestionValue"
                            />

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
						this.formData[1].value = selected.label.data.postal_code
						this.formData[2].value = selected.label.data.city
						this.formData[3].value = selected.label.data.street
						this.formData[4].value = selected.label.data.house
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
            fioarr(val){
                this.axios({
                    method: 'POST',
                    url: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/fio',
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": "Token " + '4d511777467edbf3f9c0e05e17e996d1bed2a197',
                    },
                    data: { "query": val, "count": 10 }
                }).then(response => {
                    this.dadataprop = response.data
                    console.log(response, )
                })
            },
            //Запрос информации по адресу
			fetchResults(val) {
                this.fioarr(val)
				this.$refs.autocomplete.setCurrentIndex(0)
				clearTimeout(this.timeout)
				
				this.timeout = setTimeout( () => {
					const AddressPromise = this.dadataprop
					
					Promise.all([AddressPromise]).then(() => {
					this.suggestions = [];
					
					AddressPromise.suggestions.length &&
					this.suggestions.push({ name: "destinations", data: AddressPromise.suggestions })
					});
				}, this.debounceMilliseconds)
				
			},
			renderSuggestion(suggestion) {
				return suggestion.item.value
			},
			getSuggestionValue(suggestion) {
				let { item } = suggestion
				return item.value;
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
//<table cellspacing="0" cellpadding="0" width="800"><tr><td>Описание груза</td></tr>` + cashblocklet + `</table>
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
                            'html_body': basketdatab == 3 ? htmlcont : html
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
                            'html_body':  basketdatab == 3 ? htmlcont + cash + cashurlicoContainder: html + cash + cashurlicoContainder
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
    #autosuggest ul:nth-child(1) > .autosuggest__results_title {
        border-top: none;
    }
    .autosuggest__results .autosuggest__results_title {
        color: gray;
        font-size: 11px;
        margin-left: 0;
        padding: 15px 13px 5px;
        border-top: 1px solid lightgray;
    }
</style>
