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
                        <label for="staticEmail" class="col-sm-3 col-form-label">ФИО</label>
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
                        <label for="staticEmail" class="col-sm-3 col-form-label">Телефон</label>
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
                    
                    <div class="form-group row"
                            id="exampleInputGroup1"
                            label="Email address:"
                            label-for="exampleInput1"
                            description="We'll never share your email with anyone else."
                            >
                        <label for="staticEmail" class="col-sm-3 col-form-label">Email<span class="redstar">*</span></label>
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

                 <b-button  v-show="calcRegistrGet" type="submit" class="typepost-but-succes button-next" variant="primary">{{ this.presoptionStateBay == 1 ? 'Отправить' : 'Отправить и оплатить'}}</b-button>

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
                checked: 1
            }
        },
        computed: {
            ...mapGetters([
            'presoptionStateFace', 'presoptionStateBay', 'calcRegistrGet'
            ])
        },
        methods: {
            ...mapMutations([
                'presoptionFace', 'presoptionBay', 
            ]),
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
            telinput(evt) {
                this.$store.state.tel =  this.telephone
                this.$store.state.mailPoshta =  this.email
                this.$store.state.vliceinput =  this.fio
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
