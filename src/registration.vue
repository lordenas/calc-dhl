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

		<div class="radio-btn-group client-urlic" v-show="presoptionStateFace == 1">
			<div class="radio"><input type="radio" name="radio" value="1" checked="checked" v-model="checked" id="one" /><label for="one">Новый клиент</label></div>
			<div class="radio"><input type="radio" name="radio" value="2" v-model="checked" id="two"  /><label for="two">Действующий клиент</label></div>
		</div>
                <b-form @submit="onSubmitValid">
                    <div v-if="checked == 2 && presoptionStateFace == 1" class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label">Номер договора</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" >
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
                                @input="vliceinput">
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
                            placeholder="+7 (000)-000-0000"
                            v-mask="'+7(###)-###-####'"
                            @input="validmail">
                            </b-form-input>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label">Адрес отправления</label>
                        <div class="col-sm-9">

                                <b-form-input 
                                id="exampleInput4"
                                type="text"
                                v-model="addressotprhis"
                                placeholder="Введите данные"
                                required
                                >
                                </b-form-input>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label">Организация отправитель</label>
                        <div class="col-sm-9">

                                <b-form-input 
                                id="exampleInput15"
                                type="text"
                                v-model="orgotpravit"
                                placeholder="Введите данные"
                                required
                                >
                                </b-form-input>
                        </div>
                    </div>
                    <hr>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label">ФИО получателя</label>
                        <div class="col-sm-9">
                            <b-form-input 
                                id="exampleInput5"
                                type="text"
                                v-model="fiopoluch"
                                placeholder="Введите данные"
                                required
                                >
                                </b-form-input>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label">Адрес получателя</label>
                        <div class="col-sm-9">
                            <b-form-input 
                                id="exampleInput5"
                                type="text"
                                v-model="addresspoluch"
                                placeholder="Введите данные"
                                required
                                >
                                </b-form-input>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label">Организация получатель</label>
                        <div class="col-sm-9">
                            <b-form-input 
                                id="exampleInput6"
                                type="text"
                                v-model="nazorg"
                                placeholder="Введите данные"
                                required
                                >
                                </b-form-input>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-3 col-form-label">Телефон получателя</label>
                        <div class="col-sm-9">
                                <b-form-input 
                                class="form-control" 
                                id="us-phone-number-ex" 
                                type="text"
                                v-model="telpoluch"
                                required
                                placeholder="+7 (000)-000-0000"
                                v-mask="'+7(###)-###-####'"
                                @input="telpoluchinput">
                                </b-form-input>
                        </div>
                    </div>
                    <hr>
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
                            @input="validmail">
                            </b-form-input>
                        </div>
                    </div>
                    <div class="col-sm-12 text-left" v-show="presoptionStateFace == 2">
                        <b-form-checkbox id="checkbox1"
                            v-model="status"
                            value="accepted"
                            unchecked-value="not_accepted">
                        Я принимаю условия доставки
                        </b-form-checkbox>
                    </div>
            
        <template v-if="!this.$store.state.flagBasketContainer">
            <div v-if="checked != 2">
                <div class="typepost" v-show="presoptionStateFace == 1">
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-5 col-form-label">Наименование Вашей компании</label>
                        <div class="col-sm-7">
                            <input type="text" @input="zakazchikinput" class="form-control" >
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-5 col-form-label">Юридический адрес Вашей компании</label>
                        <div class="col-sm-7">
                            <input type="text" class="form-control" >
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-5 col-form-label">Документ, на основании которого, лицо действует от имени юридического лица</label>
                        <div class="col-sm-7">
                            <input type="text"  @input="consoleinput" class="form-control" >
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-5 col-form-label">ФИО генерального директора</label>
                        <div class="col-sm-7">
                            <input type="text" @input="vliceDirinput" class="form-control" >
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-1 col-form-label">ИНН</label>
                        <div class="col-sm-5">
                            <input type="text" @input="inninput" class="form-control" >
                        </div>
                        <label for="staticEmail" class="col-sm-1 col-form-label">КПП</label>
                        <div class="col-sm-5">
                            <input type="text"  @input="kppinput" class="form-control" >
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-1 col-form-label">ОГРН</label>
                        <div class="col-sm-11">
                            <input type="text" @input="ogrnInput" class="form-control" >
                        </div>
                    </div>
                    <br>
                    <h5>Банковские реквизиты</h5>
                    <br>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-1 col-form-label">Банк</label>
                        <div class="col-sm-5">
                            <input @input="bankinput" type="text" class="form-control" >
                        </div>
                        <label for="staticEmail" class="col-sm-1 col-form-label">БИК</label>
                        <div class="col-sm-5">
                            <input @input="bikinput" type="text" class="form-control" >
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-1 col-form-label">К/С</label>
                        <div class="col-sm-5">
                            <input  @input="kschetinput" type="text" class="form-control" >
                        </div>
                        <label for="staticEmail" class="col-sm-1 col-form-label">Р/С</label>
                        <div class="col-sm-5">
                            <input @input="rschetinput" type="text" class="form-control" >
                        </div>
                    </div>
                </div>
            
                <div class="title-block-new" v-show="presoptionStateFace == 1">
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
                <div class="typepost" v-show="presoptionStateFace == 1">
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-1 col-form-label">Страна</label>
                        <div class="col-sm-11">
                            <input type="text" class="form-control" >
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="staticEmail" class="col-sm-1 col-form-label">Город</label>
                        <div class="col-sm-5">
                            <input type="text" class="form-control" >
                        </div>
                        <label for="staticEmail" class="col-sm-1 col-form-label">Индекс</label>
                        <div class="col-sm-5">
                            <input type="text" class="form-control" >
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

                 <b-button @click="toaxios"  v-show="calcRegistrGet" type="submit" class="typepost-but-succes button-next" variant="primary">{{ this.presoptionStateBay == 1 ? 'Отправить' : 'Отправить и оплатить'}}</b-button>

		</div>
        </b-form>
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
            }
        },
        computed: {
            ...mapGetters([
            'presoptionStateFace', 'presoptionStateBay', 'calcRegistrGet', 'countDayState'
            ])
        },
        methods: {
            ...mapMutations([
                'presoptionFace', 'presoptionBay', 
            ]),
            toaxios() {
                if(this.validemeil) {
                    let newdata =  new Date()
                    let today = (newdata.getDate() < 10 ? '0' : '') + newdata.getDate() + '.' + ((newdata.getMonth() + 1) < 10 ? '0' : '') + (newdata.getMonth() + 1) + '.' + newdata.getUTCFullYear()
                    let todayLast = ((parseInt(newdata.getDate())+parseInt(this.countDayState)) < 10 ? '0' : '') + (parseInt(newdata.getDate())+parseInt(this.countDayState)) + '.' + ((newdata.getMonth() + 1) < 10 ? '0' : '') + (newdata.getMonth() + 1) + '.' + newdata.getUTCFullYear()
                    let arrbask = this.$store.state.backetData.map((item, index) => {
                        return '<tr><td colspan="4">'+ (item.title == 1 ? 'Документы' :  item.title == 2 ? 'Груз' : 'Контейнер') + ', вес:' + item.parametr  + (item.gabarit ? ', габариты '  +  item.gabarit : '') +  '</td></tr>'
                    })
                    let html = `<html>
                    <style>
                        table td {
                            border: 1px solid #000;
                            padding: 5px;
                            text-align: center;
                            margin: 0px;
                        }
                    </style>
                    <body>
                        <h3>Добрый день!</h3>
                        <b>Ваш заказ принят в работу. </b>
                        <table cellspacing="0" cellpadding="0" style="width: 800px;">
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
                                <td colspan="2"> ` + this.addressotprhis + `<br></td>
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
                                <td colspan="2">Данные получателя<br></td>
                            </tr>
                            <tr>
                                <td colspan="2">Организация: ` + this.nazorg + `<br></td>
                                <td>ФИО</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td colspan="2">` + this.addresspoluch + `</td>
                                <td>Должность</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td colspan="2">Дата, время получения</td>
                                <td colspan="2"></td>
                            </tr>
                            <tr>
                                <td colspan="2">Подпись получателя</td>
                                <td colspan="2"></td>
                            </tr>
                            <tr>
                                <td colspan="4" style="background: #1e457e; color: #fff">Описание вложения<br></td>
                            </tr>
                            `+ arrbask +`
                        </table>

                       
                    </body>
                    </html>`

                    
                    this.axios({
                            method: 'POST',
                            url: 'http://api.mailhandler.ru/message/send/',
                            headers: {
                                "X-Secure-Token": "cff7fac0-37de-48ea-abb4-d30d3d29f803",
                                "Accept": "application/json",
                                "Content-Type": "application/json",
                            },
                            data: {
                            'from': 'lordenas@gmail.com',
                            'to': [this.email],
                            'subject': 'Заказ успешно принят в работу.',
                            'html_body': html
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
            ogrnInput(evt) {
                this.$store.state.ogrn =  evt.target.value
                this.$store.state.mailPoshta =  this.email
            },
            vliceinput(evt) {
                this.$store.state.vliceinput =  this.fio
            },
            vliceDirinput(evt) {
                this.$store.state.vliceDirinput =  evt.target.value
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

            telpoluchinput(evt) {
                this.$store.state.telpoluchinput =  evt.target.value
            },

            validmail() {
                let validMail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
                this.validemeil = validMail.test(this.email)
                this.$store.state.tel =  this.telephone
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
